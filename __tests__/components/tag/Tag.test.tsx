import React from "react";
import { render } from "@testing-library/react";
import Tag from "@/components/tag/Tag";

describe("Tag Component", () => {
    test("renders tag", () => {
        const { getByRole } = render(<Tag>Atomic</Tag>);
        const tagElement = getByRole("tag");
        expect(tagElement).toBeInTheDocument();
    });

    test("renders tag with text", () => {
        const { getByText } = render(<Tag>Atomic</Tag>);
        const tagElement = getByText("Atomic");
        expect(tagElement).toBeInTheDocument();
    });
});
