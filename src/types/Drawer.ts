import { ReactNode } from "react";

export type DrawerProps = {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
};
