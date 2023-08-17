import { ReactNode } from "react";

export type ButtonProps = {
    onClick?: () => void;
    color?: "success" | "error";
    children: ReactNode;
};
