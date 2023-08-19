"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { DrawerProps } from "@/types/Drawer";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Drawer = ({ open, onClose, children }: DrawerProps) => {
    const ref = useOutsideClick(onClose);

    return createPortal(
        open && (
            <>
                <div
                    role="overlay"
                    className={`fixed inset-0 bg-black opacity-20 transition-opacity duration-300 blur ${
                        open ? "ease-in" : "ease-out"
                    } ${open ? "visible" : "invisible"}`}
                ></div>
                <div
                    role="drawer"
                    ref={ref}
                    className="fixed right-0 top-0 z-40 h-screen p-4 overflow-y-auto bg-white w-96"
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
