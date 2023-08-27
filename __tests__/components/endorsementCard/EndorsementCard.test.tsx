import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EndorsementCard from "@/components/endorsementCard/EndorsementCard";
import { TRUNCATION_LENGTH } from "@/constants/comman";
import { stringToRegex } from "@/utils/stringToRegex";

describe("EndorsementCard", () => {
    const cardProps = {
        name: "suhas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    };

    test("renders card with name, small description and avatar", () => {
        const { getByText, getByRole, queryByText } = render(<EndorsementCard {...cardProps} />);
        const listElement = getByRole("listitem");
        const nameElement = getByText(cardProps.name);
        const avatarElement = getByText(cardProps.name.charAt(0));

        const descriptionElement = getByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit/i);
        const seeMoreElement = queryByText("...see more");

        expect(listElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(avatarElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(seeMoreElement).not.toBeInTheDocument();
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
        const seeMoreElement = getByRole("button", { name: "... see more" });
        const truncDescElement = getByText(stringToRegex(cardProps.description.slice(0, TRUNCATION_LENGTH)));

        expect(listElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(seeMoreElement).toBeInTheDocument();
        expect(seeMoreElement).toBeInTheDocument();
        expect(truncDescElement).toBeInTheDocument();

        fireEvent.click(seeMoreElement);
        const seeLessElement = getByRole("button", { name: "see less" });
        const fullDescElement = getByText(stringToRegex(cardProps.description));
        expect(seeLessElement).toBeInTheDocument();
        expect(fullDescElement).toBeInTheDocument();
    });
});
