import React from "react";
import { render } from "@testing-library/react";
import Tag from "@/components/tag/Tag";

describe("Tag Component", () => {
    test("renders text correctly", () => {
        const { getByText } = render(<Tag>Atomic</Tag>);
        const tagElement = getByText("Atomic");
        expect(tagElement).toBeInTheDocument();
    });
});
