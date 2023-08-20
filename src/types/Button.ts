import { ReactNode } from "react";

export type ButtonProps = {
    icon?: ReactNode;
    children: ReactNode;
    type?: "button" | "submit";
    color?: "success" | "error";
    onClick?: () => void;
};
