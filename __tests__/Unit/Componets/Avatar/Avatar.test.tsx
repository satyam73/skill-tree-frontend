import { render, screen } from "@testing-library/react";
import { dummyImg } from "@/constants/image";
import Avatar from "@/components/Avatar";

describe("Avatar Component", function () {
    it("Should render the image if src is provided", function () {
        render(<Avatar src={dummyImg} name="Dummy" />);

        const avatarImageElement = screen.getByTestId("avatar-img");
        expect(avatarImageElement).toHaveAttribute("src", dummyImg);
        expect(avatarImageElement).toHaveAttribute("alt", "Dummy");
        expect(avatarImageElement).toHaveAttribute("width", "32");
        expect(avatarImageElement).toHaveAttribute("height", "32");
    });

    it("Should render the name initials if src is false", function () {
        render(<Avatar name="Manish" />);

        const avatarImageElement = screen.queryByTestId("avatar-img");
        const avatarInitialsElement = screen.getByTestId("avatar-name-intials");
        expect(avatarImageElement).not.toBeInTheDocument();
        expect(avatarInitialsElement).toHaveTextContent("M");
    });
});
