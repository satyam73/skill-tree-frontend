import { ButtonProps } from "@/types/Button";
import React from "react";

const Button = ({ type = "button", children, color = "success", onClick = () => {} }: ButtonProps) => {
    const btnClasses = `btn ${color}`;

    return (
        <button type={type} className={btnClasses} onClick={onClick}>
            <span>{children}</span>
        </button>
    );
};

export default Button;
