import React, { ReactNode } from "react";

type ButtonProps = {
    icon?: ReactNode;
    children: ReactNode;
    type?: "button" | "submit";
    color?: "success" | "error";
    onClick?: () => void;
    block?: boolean;
};

function getButtonColors(color: string) {
    switch (color) {
        case "success":
            return "bg-green text-white";
        case "error":
            return "bg-red-100 border-2 border-solid border-red-300 text-red-600";
        default:
            return "";
    }
}

function getButtonStyles(color: string, block: boolean) {
    const defaultStyles = "p-4 rounded-md font-medium flex items-center gap-1 justify-center";
    const buttonColor = getButtonColors(color);
    const buttonWidth = block ? "w-full" : "";

    return `${defaultStyles} ${buttonColor} ${buttonWidth}`;
}

const Button = ({
    type = "button",
    children,
    color = "success",
    block = false,
    icon,
    onClick = () => {},
}: ButtonProps) => {
    return (
        <button type={type} className={getButtonStyles(color, block)} onClick={onClick}>
            {icon ? <span role="icon"> {icon} </span> : null}
            <span>{children}</span>
        </button>
    );
};

export default Button;
