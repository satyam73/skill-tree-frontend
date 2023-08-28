import { ReactNode } from "react";

type WrapperTypes = {
    children: ReactNode;
};

export default function Wrapper({ children }: WrapperTypes) {
    return <div className="px-4 lg:px-0">{children}</div>;
}
