import Button from "@/components/Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button Test", function () {
    it("should render the correct details", function () {
        const mock = jest.fn();
        render(
            <Button onClick={mock}>
                <span>Click Me</span>
            </Button>
        );

        const buttonElement = screen.getByText("Click Me");
        expect(buttonElement).toHaveTextContent("Click Me");
    });

    it("should call the button onclick if button got clicked", function () {
        const mock = jest.fn();
        render(
            <Button onClick={mock}>
                <span>Click Me</span>
            </Button>
        );

        const buttonElement = screen.getByTestId("button");
        fireEvent.click(buttonElement);
        expect(mock).toHaveBeenCalledTimes(1);
    });
});
