import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/button/Button"; // Update the path to the Button component

describe("Button Component", () => {
    test("renders button with default type and text", () => {
        const { getByText } = render(<Button color="success">Click me</Button>);
        const button = getByText("Click me");
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("success");
    });

    test("renders button with custom type, color, and text", () => {
        const { getByText, container } = render(
            <Button color="error">
                <strong>Dangerous</strong>
            </Button>
        );
        const button = getByText("Dangerous");
        expect(button).toBeInTheDocument();
        expect(container.querySelector(".error")).toBeInTheDocument(); // Check for the class name
        expect(container.querySelector("strong")).toBeInTheDocument();
    });

    test("handles onClick event", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
        const button = getByText("Click me");

        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
