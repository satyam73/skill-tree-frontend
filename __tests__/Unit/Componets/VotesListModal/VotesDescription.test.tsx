import { render, screen } from "@testing-library/react";
import VotesDescription from "@/components/VotesListModal/VotesDescription";

describe("Votes Description Component", function () {
    it("should render the component data correctly", function () {
        const votesDescriptionData = {
            src: "",
            name: "Manish",
            date: "16/15/42",
            description: "This is the description",
        };

        render(<VotesDescription {...votesDescriptionData} />);

        const voterNameElement = screen.getByTestId("voter-name");
        const voteDateElement = screen.getByTestId("vote-date");
        const voteReasonElement = screen.getByTestId("vote-reason");
        expect(voterNameElement).toHaveTextContent("Manish");
        expect(voteDateElement).toHaveTextContent("16/15/42");
        expect(voteReasonElement).toHaveTextContent("This is the description");
    });
});
