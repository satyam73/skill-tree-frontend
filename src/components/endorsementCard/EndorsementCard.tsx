import { TRUNCATION_LENGTH } from "@/constants/comman";
import { useState } from "react";

type EndorsementCardProps = {
    name: string;
    description: string;
};

const EndorsementCard = ({ name, description }: EndorsementCardProps) => {
    const showToggleDescButton = description.length > TRUNCATION_LENGTH;

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription((prev) => !prev);
    };

    return (
        <li className="mb-6 ">
            <div className="flex items-center gap-3">
                <span className="h-8 w-8 bg-gray-500 text-gray-700 font-medium flex items-center justify-center rounded-full">
                    {name.charAt(0)}
                </span>
                <h5 className="text-xl font-medium">{name}</h5>
            </div>

            <p className="text-gray-300 pl-11">
                {showFullDescription ? description : description.slice(0, TRUNCATION_LENGTH)}
                {showToggleDescButton ? (
                    <button onClick={toggleDescription}>
                        {showFullDescription ? " " : "..."}
                        <span className="text-blue-700 cursor-pointer">
                            see {showFullDescription ? "less" : "more"}
                        </span>
                    </button>
                ) : null}
            </p>
        </li>
    );
};

export default EndorsementCard;
