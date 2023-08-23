import React, { ReactNode } from "react";

export type TagProps = {
    children: ReactNode;
};

const Tag = ({ children }: TagProps) => {
    return (
        <span
            role="tag"
            className={`rounded-full py-1 px-2 bg-yellow-light text-yellow-dark font-medium flex items-center justify-center w-min`}
        >
            {children}
        </span>
    );
};

export default Tag;
