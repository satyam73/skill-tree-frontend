import { ReactNode } from "react";
import { BUTTON_VARIENTS, BUTTON_ROUNDNESS } from "@/constants/button";

type ButtonProps = {
    children?: ReactNode;
    roundness?: string;
    varient?: string;
    padding?: string;
};

type ButtonStylesProps = {
    roundness?: string;
    varient?: string;
    padding?: string;
};

function getButtonStyle({ roundness, varient, padding }: ButtonStylesProps) {
    const baseStyles = "px-6 py-2 text-sm font-medium flex items-center justify-center gap-4";
    const varients = {
        roundness: {
            medium: "rounded-lg",
            pill: "rounded-full",
            sqaure: "rounded-none",
        },
        varient: {
            primary: "bg-blue text-white",
            secondary: "bg-black-dark text-white",
            default: "bg-gray-100 text-black-light",
            outline: "bg-transparent text-black-dark border",
            ghost: "bg-gray-100 lg:bg-transparent text-black-light border-none",
        },
        padding: `${padding}`,
    };

    const defaultVarients: { roundness: string; varient: string } = {
        roundness: varients.roundness.medium,
        varient: varients.varient.default,
    };

    if (roundness) {
        if (roundness === BUTTON_ROUNDNESS.PILL) {
            defaultVarients.roundness = varients.roundness.pill;
        } else if (roundness === BUTTON_ROUNDNESS.SQUARE) {
            defaultVarients.roundness = varients.roundness.sqaure;
        } else {
            defaultVarients.roundness = varients.roundness.medium;
        }
    }

    if (varient) {
        if (varient === BUTTON_VARIENTS.PRIMARY) {
            defaultVarients.varient = varients.varient.primary;
        } else if (varient === BUTTON_VARIENTS.SECONDARY) {
            defaultVarients.varient = varients.varient.secondary;
        } else if (varient === BUTTON_VARIENTS.OUTLINED) {
            defaultVarients.varient = varients.varient.outline;
        } else if (varient === BUTTON_VARIENTS.TEXT) {
            defaultVarients.varient = varients.varient.ghost;
        } else {
            defaultVarients.varient = varients.varient.default;
        }
    }

    return `${baseStyles} ${defaultVarients.roundness} ${defaultVarients.varient}`;
}

export default function Button({ children, roundness, varient, padding }: ButtonProps) {
    return <button className={getButtonStyle({ roundness, varient, padding })}>{children}</button>;
}
