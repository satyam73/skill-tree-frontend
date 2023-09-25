"use client";

import Image from "next/image";

type AvatarProps = {
    name: string;
    src?: string;
    size?: string;
};

type getAvatarSizeTypes = {
    size: string;
};

function getAvatarSize({ size }: getAvatarSizeTypes) {
    const sizeVariants = {
        lg: {
            width: 50,
            height: 50,
        },
        md: {
            width: 40,
            height: 40,
        },
        sm: {
            width: 32,
            height: 32,
        },
    };

    return sizeVariants[size as keyof typeof sizeVariants] || sizeVariants.md;
}

function getAvatarInitialsStyles({ size }: getAvatarSizeTypes) {
    const baseStyles =
        "text-sm font-medium rounded-full bg-gray-100 flex items-center justify-center border border-gray-600";
    const variantStyles = {
        size: {
            lg: "w-[50px] h-[50px]",
            md: "w-[40px] h-[40px]",
            sm: "w-[32px] h-[32px]",
        },
    };

    const sizeClass = variantStyles.size[size as keyof typeof variantStyles.size] || variantStyles.size.md;

    return `${baseStyles} ${sizeClass}`;
}

export default function Avatar({ src, name, size = "sm" }: AvatarProps) {
    const { width, height } = getAvatarSize({ size });
    const initials = name.trim().charAt(0).toUpperCase();

    return (
        <div className="rounded-full w-max">
            {src ? (
                <Image
                    src={src}
                    alt={name}
                    width={width}
                    height={height}
                    className="rounded-full"
                    data-testid="avatar-img"
                />
            ) : (
                <p className={getAvatarInitialsStyles({ size })} data-testid="avatar-name-intials">
                    {initials}
                </p>
            )}
        </div>
    );
}
