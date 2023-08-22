"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
};

const Drawer = ({ open, onClose, children }: DrawerProps) => {
    const ref = useOutsideClick(onClose);

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
                    className="fixed right-0 top-0 z-40 h-screen px-6 pt-20 overflow-y-auto bg-white w-3/4 sm:w-1/2 lg:w-[490px]"
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
