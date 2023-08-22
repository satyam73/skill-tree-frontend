import React from "react";
import Card, { CardProps } from "./Card";

export type CardListProps = {
    data: CardProps[];
};

const CardList = ({ data }: CardListProps) => {
    return (
        <ul>
            {data.map((end: CardProps) => (
                <Card name={end.name} description={end.description} />
            ))}
        </ul>
    );
};

export default CardList;
