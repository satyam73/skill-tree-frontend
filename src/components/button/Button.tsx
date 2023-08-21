import { ButtonProps } from "@/types/Button";
import React from "react";

const Button = ({ type = "button", children, color = "success", icon, onClick = () => {} }: ButtonProps) => {
    const defaultStyles = "py-1 px-4 text-sm rounded-md font-medium flex items-center gap-1";

    const btnBg =
        color === "success"
            ? "bg-green text-white"
            : color === "error"
            ? "bg-red-100 border-2 border-solid border-red-300 text-red-600"
            : `bg-[${color}]`;

    return (
        <button type={type} className={`${defaultStyles} ${btnBg}`} onClick={onClick}>
            {icon ? <span role="icon"> {icon} </span> : null}
            <span>{children}</span>
        </button>
    );
};

export default Button;
