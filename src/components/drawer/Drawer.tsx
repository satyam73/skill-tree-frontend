"use client";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
};

const Drawer = ({ open, onClose, children }: DrawerProps) => {
    return createPortal(
        open && (
            <>
                <div
                    role="overlay"
                    className={`fixed inset-0 bg-black-dark opacity-20 transition-opacity duration-300 blur ${
                        open ? "ease-in" : "ease-out"
                    } ${open ? "visible" : "invisible"}`}
                    onClick={onClose}
                ></div>
                <div
                    role="drawer"
                    className={`fixed right-0 top-0 pb-16 h-screen z-40 overflow-y-auto bg-white w-3/4 sm:w-1/2 lg:w-[490px]`}
                    tabIndex={-1}
                >
                    {children}

                    <button
                        className="fixed top-4 right-6 text-3xl text-gray-700 p-2 bg-blue-200 cursor-pointer"
                        onClick={onClose}
                    >
                        <IoCloseOutline />
                    </button>
                </div>
            </>
        ),
        document.body
    );
};

export default Drawer;
