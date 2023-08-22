import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "@/components/card/Card";

describe("Card ", () => {
    const cardProps = {
        name: "suhas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    };

    test("renders card with name and small description", () => {
        const { getByText, getByRole, queryByText } = render(<Card {...cardProps} />);
        const listElement = getByRole("listitem");
        const nameElement = getByText(cardProps.name);

        const descriptionElement = getByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit/i);
        const seeMoreElement = queryByText(/\.\.\.see more/i);

        expect(listElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(seeMoreElement).not.toBeInTheDocument();
    });

    test("renders card with name and long description", () => {
        const cardProps = {
            name: "pratik",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quas hic. Animi consequuntur, ullam ad qui, architecto molestias natus, libero soluta explicabo impedit aperiam magnam",
        };

        const { getByText, getByRole } = render(<Card {...cardProps} />);
        const listElement = getByRole("listitem");
        const nameElement = getByText(cardProps.name);
        const descriptionElement = getByText(
            /lorem, ipsum dolor sit amet consectetur adipisicing elit\. aliquid, quas hic\. animi consequuntur, ullam ad qui, architecto molestias natus, libero soluta explicabo impedit aperiam magnam/i
        );
        const seeMoreElement = getByText(/\.\.\.see more/i);

        expect(listElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(seeMoreElement).toBeInTheDocument();
    });
});
