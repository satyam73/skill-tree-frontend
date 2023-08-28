import { ReactNode, ChangeEvent } from "react";

type InputProps = {
    label: string;
    value: string;
    placeholder?: string;
    icon?: ReactNode;
    disabled?: boolean;
    name?: string;
    roundness?: "pill" | "medium" | "square";
    variant?: "outlined" | "filled";
    iconPosition?: "left" | "right";
    type: "text" | "number" | "email" | "password";
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

type InputStylesProps = {
    roundness?: "pill" | "medium" | "square";
    variant?: "filled" | "outlined";
};

function getInputStyle({ roundness = "pill", variant = "filled" }: InputStylesProps) {
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

    const roundnessClass = variantsStyles.roundness[roundness];
    const variantClass = variantsStyles.variant[variant];

    return `${baseStyles} ${roundnessClass} ${variantClass}`;
}

export default function Input({
    type,
    label,
    name,
    value,
    placeholder,
    disabled = false,
    icon,
    iconPosition = "right",
    roundness,
    variant,
    onChange,
}: InputProps) {
    return (
        <div className={getInputStyle({ roundness, variant })}>
            {iconPosition === "left" && <span data-testid="input-icon-left">{icon}</span>}
            <div className="text-black-light font-medium">
                <label data-testid="input-label" htmlFor={label} className="sr-only">
                    {label}
                </label>
                <input
                    data-testid="input"
                    id={label}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={onChange}
                    className="placeholder:text-black-light outline-none bg-transparent w-full"
                />
            </div>
            {iconPosition === "right" && <span data-testid="input-icon-right">{icon}</span>}
        </div>
    );
}
