import { render, screen, fireEvent } from "@testing-library/react";
import { GrPrevious } from "react-icons/gr";
import Input from "@/components/Input/Input";

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

        expect(screen.getByTestId("input-label")).toHaveTextContent("Full Name");
        expect(screen.getByTestId("input")).toHaveAttribute("type", "text");
        expect(screen.getByTestId("input")).toHaveAttribute("value", "Manish Devrani");
        expect(screen.getByTestId("input")).toHaveAttribute("placeholder", "Enter full name");
        expect(screen.getByTestId("input-icon-right")).toBeInTheDocument();
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

        expect(screen.queryByTestId("input-icon-right")).not.toBeInTheDocument();
        expect(screen.getByTestId("input-icon-left")).toBeInTheDocument();
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

        expect(screen.queryByTestId("input-icon-left")).not.toBeInTheDocument();
        expect(screen.getByTestId("input-icon-right")).toBeInTheDocument();
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
