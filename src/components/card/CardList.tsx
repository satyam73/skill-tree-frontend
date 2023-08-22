import React from "react";
import Card, { CardProps } from "./Card";

export type CardListProps = {
    data: CardProps[];
};

const CardList = ({ data }: CardListProps) => {
    return (
        <ul>
            {data.map((end) => (
                <Card name={end.name} description={end.description} key={end.id} />
            ))}
        </ul>
    );
};

export default CardList;
