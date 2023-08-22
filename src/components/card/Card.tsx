export type CardProps = {
    name: string;
    description: string;
};

const Card = ({ name, description }: CardProps) => {
    const seeMoreBtn =
        description.length > 160 ? (
            <span>
                ... <span className="text-blue cursor-pointer">see more</span>
            </span>
        ) : null;

    return (
        <li className="mb-6">
            <h5 className="text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-300">
                {description}
                {seeMoreBtn}
            </p>
        </li>
    );
};

export default Card;
