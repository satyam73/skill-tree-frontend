import { render, screen } from "@testing-library/react";
import VotesListModal from "@/components/VotesListModal";

describe("Votes Description Component", function () {
    it("should render the component data correctly", function () {
        const mock = jest.fn();
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
        ];

        render(<VotesListModal votes={votes} onClose={mock} />);

        expect(screen.getByTestId("votes-title")).toHaveTextContent("Member Votes:");
        expect(screen.getByTestId("votes-length")).toHaveTextContent("2");
    });
});
