import { ButtonProps } from "@/types/Button";
import Image from "next/image";
import React from "react";

const Button = ({ color = "success", children, onClick = () => {} }: ButtonProps) => {
    const btnClasses = `${color}`;
    const icon = color === "success" ? "/checkmark.svg" : "/cross.svg";

    return (
        <button className={btnClasses} onClick={onClick}>
            <Image src={icon} alt={icon} width="25" height="25" />
            <span>{children}</span>
        </button>
    );
};

export default Button;
