import { ReactNode } from "react";

type WrapperTypes = {
    children: ReactNode;
    styles?: string;
};

export default function Wrapper({ children, styles }: WrapperTypes) {
    return <div className={`px-4 lg:px-0 ${styles}`}>{children}</div>;
}
