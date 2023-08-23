import { ReactNode } from "react";
import { BUTTON_VARIANTS, ROUNDNESS_VARIANTS } from "@/constants/request-board";

type ButtonProps = {
    children: ReactNode;
    roundness?: string;
    variant?: string;
};

type ButtonStylesProps = {
    roundness?: string;
    variant?: string;
};

function getButtonStyle({ roundness, variant }: ButtonStylesProps) {
    const baseStyles = "px-4 lg:px-6 py-2 text-sm font-semibold flex items-center justify-center gap-4";
    const variantsStyles = {
        roundness: {
            medium: "rounded-lg",
            pill: "rounded-full",
            sqaure: "rounded-none",
        },
        variant: {
            primary: "bg-blue text-white",
            secondary: "bg-black-dark text-white",
            default: "bg-gray-100 text-black-light",
            outline: "bg-transparent text-black-dark border",
            text: "bg-gray-100 lg:bg-transparent text-black-light border-none hover:bg-gray-100 hover:text-red-dark transition",
        },
    };

    const defaultVarients = {
        roundness: variantsStyles.roundness.medium,
        variant: variantsStyles.variant.default,
    };

    if (roundness) {
        if (roundness === ROUNDNESS_VARIANTS.PILL) {
            defaultVarients.roundness = variantsStyles.roundness.pill;
        } else if (roundness === ROUNDNESS_VARIANTS.SQUARE) {
            defaultVarients.roundness = variantsStyles.roundness.sqaure;
        } else {
            defaultVarients.roundness = variantsStyles.roundness.medium;
        }
    }

    if (variant) {
        if (variant === BUTTON_VARIANTS.PRIMARY) {
            defaultVarients.variant = variantsStyles.variant.primary;
        } else if (variant === BUTTON_VARIANTS.SECONDARY) {
            defaultVarients.variant = variantsStyles.variant.secondary;
        } else if (variant === BUTTON_VARIANTS.OUTLINED) {
            defaultVarients.variant = variantsStyles.variant.outline;
        } else if (variant === BUTTON_VARIANTS.TEXT) {
            defaultVarients.variant = variantsStyles.variant.text;
        } else {
            defaultVarients.variant = variantsStyles.variant.default;
        }
    }

    return `${baseStyles} ${defaultVarients.roundness} ${defaultVarients.variant}`;
}

export default function Button({ children, roundness, variant }: ButtonProps) {
    return <button className={getButtonStyle({ roundness, variant })}>{children}</button>;
}
