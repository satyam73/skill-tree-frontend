import React, { ReactNode } from "react";

type ButtonProps = {
    icon?: ReactNode;
    children: ReactNode;
    type?: "button" | "submit";
    color?: "success" | "error";
    onClick?: () => void;
};

function getButtonColors(color: string) {
    switch (color) {
        case "success":
            return "bg-green text-white";
        case "error":
            return "bg-red-100 border-2 border-solid border-red-300 text-red-600";
        default:
            return `bg-[${color}]`;
    }
}

const Button = ({ type = "button", children, color = "success", icon, onClick = () => {} }: ButtonProps) => {
    const defaultStyles = "py-1 px-4 text-sm rounded-md font-medium flex items-center gap-1";

    const buttonColor = getButtonColors(color);

    return (
        <button type={type} className={`${defaultStyles} ${buttonColor}`} onClick={onClick}>
            {icon ? <span role="icon"> {icon} </span> : null}
            <span>{children}</span>
        </button>
    );
};

export default Button;
