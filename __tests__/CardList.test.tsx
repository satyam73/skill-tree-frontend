import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "@/components/card/Card";
import CardList from "@/components/card/CardList";
import * as data from "../__mocks__/drawer.json";

describe("Card List", () => {
    test("renders card list", () => {
        const { getByRole } = render(<CardList data={data.endorsements} />);
        const listElement = getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test("renders card list of endorsment", () => {
        const { getAllByRole } = render(<CardList data={data.endorsements} />);
        const listItemElements = getAllByRole("listitem");
        expect(listItemElements).toHaveLength(data.endorsements.length);
    });
});
