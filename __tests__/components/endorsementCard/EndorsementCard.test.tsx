import React from "react";
import { render } from "@testing-library/react";
import EndorsementCard from "@/components/endorsementCard/EndorsementCard";

describe("EndorsementCard", () => {
    const cardProps = {
        name: "suhas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    };

    test("renders card with name and small description", () => {
        const { getByText, getByRole, queryByText } = render(<EndorsementCard {...cardProps} />);
        const listElement = getByRole("listitem");
        const nameElement = getByText(cardProps.name);

        const descriptionElement = getByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit/i);
        const seeMoreElement = queryByText("see more");
        const threeDotsElement = queryByText("...");

        expect(listElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(seeMoreElement).not.toBeInTheDocument();
        expect(threeDotsElement).not.toBeInTheDocument();
    });

    test("renders card with name and long description", () => {
        const cardProps = {
            name: "pratik",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quas hic. Animi consequuntur, ullam ad qui, architecto molestias natus, libero soluta explicabo impedit aperiam magnam",
        };

        const { getByText, getByRole } = render(<EndorsementCard {...cardProps} />);
        const listElement = getByRole("listitem");
        const nameElement = getByText(cardProps.name);
        const descriptionElement = getByText(
            /lorem, ipsum dolor sit amet consectetur adipisicing elit\. aliquid, quas hic\. animi consequuntur, ullam ad qui, architecto molestias natus, libero soluta explicabo impedit aperiam magnam/i
        );
        const seeMoreElement = getByText("see more");
        const threeDotsElement = getByText("...");

        expect(listElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(seeMoreElement).toBeInTheDocument();
        expect(threeDotsElement).toBeInTheDocument();
    });
});
