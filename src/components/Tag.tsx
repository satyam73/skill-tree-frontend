import React, { ReactNode } from "react";

export type TagProps = {
    children: ReactNode;
};

const Tag = ({ children }: TagProps) => {
    return (
        <span
            role="tag"
            className={`rounded-full py-1 px-2 bg-yellow-light font-medium flex items-center justify-center w-min`}
        >
            {" "}
            <span className={`text-yellow-dark`}>{children}</span>
        </span>
    );
};

export default Tag;
