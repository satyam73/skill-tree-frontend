import { render, fireEvent } from "@testing-library/react";
import { useOutsideClick } from "@/hooks/useOutsideClick"; // Import the hook

const mockHandler = jest.fn();

const TestComponent = () => {
    const ref = useOutsideClick(mockHandler);
    return <div ref={ref}>Test Component</div>;
};

describe("useOutsideClick", () => {
    test("handler is called when clicking outside the element", () => {
        render(<TestComponent />);

        fireEvent.click(document);

        expect(mockHandler).toHaveBeenCalledTimes(1);
        mockHandler.mockReset();
    });

    test("handler is not called when clicking inside the element", () => {
        const { getByText } = render(<TestComponent />);

        const testDiv = getByText("Test Component");

        fireEvent.click(testDiv);

        expect(mockHandler).not.toHaveBeenCalled();
    });
});
