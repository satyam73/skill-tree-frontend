"use client";

import Image from "next/image";

type AvatarProps = {
    src?: string;
    name: string;
    width: number;
    height: number;
};

const avatarStyle = {
    borderRadius: "50%",
};

export default function Avatar({ src, name, width, height }: AvatarProps) {
    return (
        <div className="rounded-full">
            {src ? (
                <Image
                    src={src}
                    alt={name}
                    width={width}
                    height={height}
                    style={avatarStyle}
                    data-testid="avatar-img"
                />
            ) : (
                <p
                    data-testid="avatar-name-intials"
                    className="text-sm font-medium rounded-full bg-gray-100 flex items-center justify-center border border-gray-600"
                    style={{ height: `${height}px`, width: `${width}px` }}
                >
                    {name.charAt(0).toUpperCase()}
                </p>
            )}
        </div>
    );
}
