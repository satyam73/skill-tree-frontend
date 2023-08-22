import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/button/Button"; // Update the path to the Button component
import { IoCheckmarkSharp } from "react-icons/io5";

describe("Button Component", () => {
    test("renders button with default type and text", () => {
        const { getByRole, queryByRole } = render(<Button>click me</Button>);
        const button = getByRole("button", {
            name: "click me",
        });
        const icon = queryByRole("icon");
        expect(icon).not.toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "button");
        expect(button).toHaveClass("bg-green");
    });

    test("renders button with custom type, color, icon and text", () => {
        const { getByRole } = render(
            <Button type="submit" color="error" icon={<IoCheckmarkSharp />}>
                {" "}
                <span>custom</span>
            </Button>
        );
        const button = getByRole("button", {
            name: "custom",
        });
        const icon = getByRole("icon");
        expect(icon).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "submit");
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
