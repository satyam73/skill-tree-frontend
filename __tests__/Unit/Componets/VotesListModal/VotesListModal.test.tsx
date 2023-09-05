import { render, screen, fireEvent } from "@testing-library/react";
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

        const votesModalTitleElement = screen.getByTestId("votes-title");
        const votesLengthElement = screen.getByTestId("votes-length");
        expect(votesModalTitleElement).toHaveTextContent("Member Votes:");
        expect(votesLengthElement).toHaveTextContent("2");
    });

    it("should call the onclose method on clicking outside of modal", function () {
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

        const outsideModalWrapperElement = screen.getByTestId("close-modal");
        fireEvent.click(outsideModalWrapperElement);
        expect(mock).toHaveBeenCalledTimes(1);
    });
});
