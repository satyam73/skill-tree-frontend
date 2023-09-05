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

        expect(screen.getByText("Click Me")).toHaveTextContent("Click Me");
    });

    it("should call the button onclick if button got clikced", function () {
        const mock = jest.fn();
        render(
            <Button onClick={mock}>
                <span>Click Me</span>
            </Button>
        );

        fireEvent.click(screen.getByTestId("button"));
        expect(mock).toHaveBeenCalledTimes(1);
    });
});
