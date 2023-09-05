import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/Button";
import { IoCheckmarkSharp } from "react-icons/io5";

describe("Button Component", () => {
    test("renders button with default type and text", () => {
        const { getByRole } = render(<Button>click me</Button>);
        const button = getByRole("button", {
            name: "click me",
        });
        expect(button).toBeInTheDocument();
    });

    test("renders button with custom type, color, icon and textn width", () => {
        const { getByRole } = render(
            <Button variant="error">
                <IoCheckmarkSharp />
                <span>custom</span>
            </Button>
        );
        const button = getByRole("button", {
            name: "custom",
        });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("bg-red-100");
    });

    test("handles onClick event", () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<Button onClick={handleClick}>click</Button>);
        const button = getByRole("button", {
            name: "click",
        });
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
