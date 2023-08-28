"use client";

import Image from "next/image";

type AvatarProps = {
    name: string;
    src?: string;
    size?: "lg" | "md" | "sm";
};

type getImageSizeTypes = {
    size: "lg" | "md" | "sm";
};

function getImageSize({ size }: getImageSizeTypes) {
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

    return sizeVariants[size];
}

export default function Avatar({ src, name, size = "sm" }: AvatarProps) {
    const { width, height } = getImageSize({ size });
    const initials = name.trim().charAt(0).toUpperCase();

    return (
        <div className="rounded-full">
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
                <p
                    className={`text-sm font-medium rounded-full bg-gray-100 flex items-center justify-center border border-gray-600 w-[${width}px] h-[${height}px]`}
                    data-testid="avatar-name-intials"
                >
                    {initials}
                </p>
            )}
        </div>
    );
}
