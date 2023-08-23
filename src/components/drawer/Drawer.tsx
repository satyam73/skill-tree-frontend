"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
    top?: number; // it should be length of header and values are from tailwind classes
};

const Drawer = ({ open, onClose, children, top = 0 }: DrawerProps) => {
    const ref = useOutsideClick(onClose);
    const topPosition = `top-${top}`;
    const height = `h-[calc(100vh-${top * 4}px)]`; // 1 = 4px from tailwind classes

    return createPortal(
        open && (
            <>
                <div
                    role="overlay"
                    className={`fixed inset-0 bg-black-dark opacity-20 transition-opacity duration-300 blur ${
                        open ? "ease-in" : "ease-out"
                    } ${open ? "visible" : "invisible"}`}
                ></div>
                <div
                    role="drawer"
                    ref={ref}
                    className={`fixed right-0 ${topPosition} ${height} z-40  px-6 pt-20 overflow-y-auto bg-white w-3/4 sm:w-1/2 lg:w-[490px]`}
                    tabIndex={-1}
                >
                    {children}
                </div>
            </>
        ),
        document.body
    );
};

export default Drawer;
