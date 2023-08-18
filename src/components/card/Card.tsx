import { CardProps } from "@/types/Card";

const Card = ({ name, description }: CardProps) => {
    const seeMoreBtn = description.length > 160 ? <span>...see more</span> : null;

    return (
        <li>
            <h5>{name}</h5>
            <p>
                {description}${seeMoreBtn}
            </p>
        </li>
    );
};

export default Card;
