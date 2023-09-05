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

        expect(screen.queryByTestId("remaining-avatars")).not.toBeInTheDocument();
    });

    it("should show the remaing avatar text 1", function () {
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

        expect(screen.queryByTestId("remaining-avatars")).toHaveTextContent("1");
    });
});
