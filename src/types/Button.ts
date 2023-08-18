import { ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode;
    type?: "button" | "submit";
    color?: "success" | "error";
    onClick?: () => void;
};
