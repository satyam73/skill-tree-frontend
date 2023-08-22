import React from "react";
import { render } from "@testing-library/react";
import Drawer from "@/components/drawer/Drawer";

describe("Drawer", () => {
    test("when open render drawer and overlay", () => {
        const { getByRole } = render(<Drawer open={true} onClose={() => {}} />);
        const drawer = getByRole("drawer");
        const overlay = getByRole("overlay");

        expect(drawer).toBeInTheDocument();
        expect(overlay).toBeInTheDocument();
    });

    test("when close do not renders drawer and overlay", () => {
        const { queryByRole } = render(<Drawer open={false} onClose={() => {}} />);
        const drawer = queryByRole("drawer");
        const overlay = queryByRole("overlay");

        expect(drawer).not.toBeInTheDocument();
        expect(overlay).not.toBeInTheDocument();
    });
});
