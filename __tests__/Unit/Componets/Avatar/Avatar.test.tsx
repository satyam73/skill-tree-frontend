import { render, screen } from "@testing-library/react";
import { dummyImg } from "@/constants/image";
import Avatar from "@/components/Avatar/Avatar";

describe("Avatar Component", function () {
    it("Should render the image if src is provided", function () {
        render(<Avatar src={dummyImg} name="Dummy" />);

        expect(screen.getByTestId("avatar-img")).toHaveAttribute("src", dummyImg);
        expect(screen.getByTestId("avatar-img")).toHaveAttribute("alt", "Dummy");
        expect(screen.getByTestId("avatar-img")).toHaveAttribute("width", "32");
        expect(screen.getByTestId("avatar-img")).toHaveAttribute("height", "32");
    });

    it("Should render the name initials if src is false", function () {
        render(<Avatar name="Manish" />);

        expect(screen.queryByTestId("avatar-img")).not.toBeInTheDocument();
        expect(screen.getByTestId("avatar-name-intials")).toHaveTextContent("M");
    });
});
