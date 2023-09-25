"use client";
import React, { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
};

const Drawer = ({ open, onClose, children }: DrawerProps) => {
    return open ? (
        <>
            <div
                role="overlay"
                className={`fixed inset-0 bg-black-dark opacity-20 transition-opacity duration-300 blur z-[200] ${
                    open ? "ease-in" : "ease-out"
                } ${open ? "visible" : "invisible"}`}
                onClick={onClose}
            ></div>
            <div
                role="drawer"
                className={
                    "fixed right-0 top-0 pb-16 h-screen z-40 overflow-y-auto bg-white w-3/4 sm:w-1/2 lg:w-1/3 z-[300]"
                }
                tabIndex={-1}
            >
                {children}

                <button
                    className="fixed p-2 text-3xl text-gray-700 bg-blue-200 cursor-pointer top-4 right-6"
                    onClick={onClose}
                >
                    <IoCloseOutline />
                </button>
            </div>
        </>
    ) : null;
};

export default Drawer;
