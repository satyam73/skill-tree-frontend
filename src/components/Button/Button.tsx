import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    roundness?: "pill" | "medium" | "square";
    variant?: "primary" | "secondary" | "default" | "outline" | "text";
    onClick?: () => void;
};

type ButtonStylesProps = {
    roundness?: "pill" | "medium" | "square";
    variant?: "primary" | "secondary" | "default" | "outline" | "text";
};

function getButtonStyle({ roundness = "pill", variant = "default" }: ButtonStylesProps) {
    const baseStyles = "px-4 lg:px-6 py-2 text-sm font-semibold flex items-center justify-center gap-4";
    const variantsStyles = {
        roundness: {
            medium: "rounded-lg",
            pill: "rounded-full",
            square: "rounded-none",
        },
        variant: {
            primary: "bg-blue text-white",
            secondary: "bg-black-dark text-white",
            default: "bg-gray-100 text-black-light",
            outline: "bg-transparent text-black-dark border",
            text: "bg-gray-100 lg:bg-transparent text-black-light border-none hover:bg-gray-100 hover:text-red-dark transition",
        },
    };

    const roundnessClass = variantsStyles.roundness[roundness];
    const variantClass = variantsStyles.variant[variant];

    return `${baseStyles} ${roundnessClass} ${variantClass}`;
}

export default function Button({ children, roundness, variant, onClick }: ButtonProps) {
    return (
        <button className={getButtonStyle({ roundness, variant })} onClick={onClick} data-testid="button">
            {children}
        </button>
    );
}
