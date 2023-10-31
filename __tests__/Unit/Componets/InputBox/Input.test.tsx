import { render, screen, fireEvent } from "@testing-library/react";
import { GrPrevious } from "react-icons/gr";
import Input from "@/components/Input";

describe("Input Component", function () {
    it("should render correct details", function () {
        const onChangeMock = jest.fn();

        render(
            <Input
                label="Full Name"
                type="text"
                value="Manish Devrani"
                placeholder="Enter full name"
                icon={<GrPrevious />}
                onChange={onChangeMock}
            />
        );

        const inputLabelElement = screen.getByTestId("input-label");
        const inputElement = screen.getByTestId("input");
        const inputIconElement = screen.getByTestId("input-icon-right");
        expect(inputLabelElement).toHaveTextContent("Full Name");
        expect(inputElement).toHaveAttribute("type", "text");
        expect(inputElement).toHaveAttribute("value", "Manish Devrani");
        expect(inputElement).toHaveAttribute("placeholder", "Enter full name");
        expect(inputIconElement).toBeInTheDocument();
    });

    it("should render icon on the left side", function () {
        const onChangeMock = jest.fn();

        render(
            <Input
                label="Full Name"
                type="text"
                value="Manish Devrani"
                icon={<GrPrevious />}
                iconPosition="left"
                onChange={onChangeMock}
            />
        );

        const inputLeftIcon = screen.getByTestId("input-icon-left");
        const inputRightIcon = screen.queryByTestId("input-icon-right");
        expect(inputRightIcon).not.toBeInTheDocument();
        expect(inputLeftIcon).toBeInTheDocument();
    });

    it("should render icon on the right side", function () {
        const onChangeMock = jest.fn();

        render(
            <Input
                label="Full Name"
                type="text"
                value="Manish Devrani"
                icon={<GrPrevious />}
                iconPosition="right"
                onChange={onChangeMock}
            />
        );

        const inputLeftIcon = screen.queryByTestId("input-icon-left");
        const inputRightIcon = screen.queryByTestId("input-icon-right");
        expect(inputLeftIcon).not.toBeInTheDocument();
        expect(inputRightIcon).toBeInTheDocument();
    });

    it("calls the input onChange handler when input value changes", function () {
        const onChangeMock = jest.fn();

        render(
            <Input
                label="Full Name"
                type="text"
                value="Manish Devrani"
                placeholder="testing input value"
                onChange={onChangeMock}
            />
        );

        const inputElement = screen.getByTestId("input");
        fireEvent.change(inputElement, { target: { value: "abc" } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
});
