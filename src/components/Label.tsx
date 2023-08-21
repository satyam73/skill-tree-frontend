import React from "react";

export type LabelProps = {
    children: ReactNode;
};

const Label = ({ children }) => {
    return (
        <span className="rounded-full py-1 px-2 bg-yellow-light font-medium ">
            {" "}
            <span>Atomic</span>
        </span>
    );
};

export default Label;
