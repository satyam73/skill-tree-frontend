import { useState } from "react";

const TRUNCATION_LENGTH = 160;

type EndorsementCardProps = {
    name: string;
    description: string;
};

const EndorsementCard = ({ name, description }: EndorsementCardProps) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription((prev) => !prev);
    };

    const seeMoreBtn =
        description.length > TRUNCATION_LENGTH ? (
            <button onClick={toggleDescription}>
                {showFullDescription ? " " : "..."}
                <span className="text-blue cursor-pointer">see {showFullDescription ? "less" : "more"}</span>
            </button>
        ) : null;

    return (
        <li className="mb-6">
            <h5 className="text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-300">
                {showFullDescription ? description : description.slice(0, TRUNCATION_LENGTH)}
                {seeMoreBtn}
            </p>
        </li>
    );
};

export default EndorsementCard;
