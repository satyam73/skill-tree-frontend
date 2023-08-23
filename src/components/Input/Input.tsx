import { ReactNode } from "react";
import { ROUNDNESS_VARIANTS, INPUT_VARIANTS } from "@/constants/request-board";

type InputProps = {
    label: string;
    value: string;
    error?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    disabled?: boolean;
    name?: string;
    roundness?: "pill" | "medium" | "square";
    variant?: "outlined" | "filled";
    iconPosition?: "left" | "right";
    type: "text" | "number" | "email" | "password";
};

type InputStylesProps = {
    roundness?: string;
    variant?: string;
};

function getInputStyle({ roundness, variant }: InputStylesProps) {
    const baseStyles = "flex gap-4 py-3 px-5 w-max text-base items-center relative";
    const variantsStyles = {
        roundness: {
            square: "rounded-none",
            medium: "rounded-xl",
            pill: "rounded-[50px]",
        },
        variant: {
            filled: "bg-gray-100",
            outlined: "border-2 border-gray-400 focus-within:border-blue",
        },
    };

    const defaultVariants = {
        roundness: variantsStyles.roundness.pill,
        variant: variantsStyles.variant.outlined,
    };

    if (roundness) {
        if (roundness === ROUNDNESS_VARIANTS.PILL) {
            defaultVariants.roundness = variantsStyles.roundness.pill;
        } else if (roundness === ROUNDNESS_VARIANTS.SQUARE) {
            defaultVariants.roundness = variantsStyles.roundness.square;
        } else {
            defaultVariants.roundness = variantsStyles.roundness.medium;
        }
    }

    if (variant) {
        if (variant === INPUT_VARIANTS.FILLED) {
            defaultVariants.variant = variantsStyles.variant.filled;
        } else {
            defaultVariants.variant = variantsStyles.variant.outlined;
        }
    }

    return `${baseStyles} ${defaultVariants.roundness} ${defaultVariants.variant}`;
}

export default function Input({
    type,
    label,
    name,
    value,
    error = false,
    placeholder,
    disabled = false,
    icon,
    iconPosition,
    roundness,
    variant,
}: InputProps) {
    return (
        <div className={getInputStyle({ roundness, variant })}>
            {iconPosition === "left" && icon}
            <div className="text-black-light font-medium">
                <label htmlFor={label} className="sr-only">
                    {label}
                </label>
                <input
                    id={label}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="placeholder:text-black-light outline-none bg-transparent w-full"
                />
            </div>
            {iconPosition === "right" || !iconPosition ? icon : null}
            {error && <p className="text-xs absolute error bottom-[-40%] text-red-dark">Required Field</p>}
        </div>
    );
}
