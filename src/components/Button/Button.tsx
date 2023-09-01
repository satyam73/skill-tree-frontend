import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    roundness?: "pill" | "large" | "medium" | "square";
    variant?: "primary" | "secondary" | "default" | "outline" | "text" | "success" | "error";
    onClick?: () => void;
    icon?: ReactNode;
    block?: boolean;
};

type ButtonStylesProps = {
    roundness?: "pill" | "large" | "medium" | "square";
    variant?: "primary" | "secondary" | "default" | "outline" | "text" | "success" | "error";
    block?: boolean;
};

function getButtonStyle({ roundness = "pill", variant = "default", block = false }: ButtonStylesProps) {
    const baseStyles = "px-4 lg:px-6 py-2 text-sm font-semibold flex items-center justify-center gap-2";
    const variantsStyles = {
        roundness: {
            medium: "rounded-md",
            large: "rounded-lg",
            pill: "rounded-full",
            square: "rounded-none",
        },
        variant: {
            primary: "bg-blue text-white",
            secondary: "bg-black-dark text-white",
            success: "bg-green text-white",
            error: "bg-red-100 border-2 border-solid border-red-300 text-red-600",
            default: "bg-gray-100 text-black-light",
            outline: "bg-transparent text-black-dark border",
            text: "bg-gray-100 lg:bg-transparent text-black-light border-none hover:bg-gray-100 hover:text-red-dark-500 transition",
        },
    };

    const roundnessClass = variantsStyles.roundness[roundness];
    const variantClass = variantsStyles.variant[variant];
    const buttonWidth = block ? "w-full" : "";

    return `${baseStyles} ${roundnessClass} ${variantClass} ${buttonWidth}`;
}

export default function Button({ children, roundness, variant, block, icon, onClick }: ButtonProps) {
    return (
        <button className={getButtonStyle({ roundness, variant, block })} onClick={onClick}>
            {icon ? <span role="icon"> {icon} </span> : null}
            {children}
        </button>
    );
}
