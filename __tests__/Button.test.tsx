import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/button/Button"; // Update the path to the Button component

describe("Button Component", () => {
    test("renders button with default type and text", () => {
        const { getByRole } = render(<Button>click me</Button>);
        const button = getByRole("button", {
            name: "click me",
        });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "button");
        expect(button).toHaveClass("success");
    });

    test("renders button with custom type, color, and text", () => {
        const { getByRole } = render(
            <Button type="submit" color="error">
                {" "}
                <span>custom</span>
            </Button>
        );
        const button = getByRole("button", {
            name: "custom",
        });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "submit");
        expect(button).toHaveClass("error");
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
