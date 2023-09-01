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

        expect(screen.getByTestId("voter-name")).toHaveTextContent("Manish");
        expect(screen.getByTestId("vote-date")).toHaveTextContent("16/15/42");
        expect(screen.getByTestId("vote-reason")).toHaveTextContent("This is the description");
    });
});
