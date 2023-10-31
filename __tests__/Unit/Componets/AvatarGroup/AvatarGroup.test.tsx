import { render, screen } from "@testing-library/react";
import AvatarGroup from "@/components/AvatarGroup";

describe("Avatar Component", function () {
    it("should not show the remaining avatars text", function () {
        const votes = [
            {
                name: "Prakash",
                img: "",
                date: "16/07/2022",
                reason: "",
            },
            {
                name: "Manish",
                img: "",
                date: "16/07/2022",
                reason: "",
            },
            {
                name: "Yash",
                img: "",
                date: "16/07/2022",
                reason: "",
            },
        ];
        render(<AvatarGroup votes={votes} />);

        const remainingAvatarElement = screen.queryByTestId("remaining-avatars");
        expect(remainingAvatarElement).not.toBeInTheDocument();
    });

    it("should show the remaing avatar text as 1", function () {
        const votes = [
            {
                name: "Prakash",
                img: "",
                date: "16/07/2022",
                reason: "",
            },
            {
                name: "Manish",
                img: "",
                date: "16/07/2022",
                reason: "",
            },
            {
                name: "Yash",
                img: "",
                date: "16/07/2022",
                reason: "",
            },
            {
                name: "Mansi",
                img: "",
                date: "16/07/2022",
                reason: "",
            },
        ];
        render(<AvatarGroup votes={votes} />);

        const remainingAvatarElement = screen.queryByTestId("remaining-avatars");
        expect(remainingAvatarElement).toHaveTextContent("+1");
    });
});
