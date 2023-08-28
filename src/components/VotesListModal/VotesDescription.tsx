import Avatar from "../Avatar/Avatar";

type VotesTypes = {
    src: string;
    name: string;
    date: string;
    description: string;
};

export default function VotesDescription({ src, name, date, description }: VotesTypes) {
    return (
        <div className="grid grid-cols-[auto_minmax(0,_1fr)] items-start gap-4 p-4 border-b border-gray-400">
            <div>
                <Avatar name={name} src={src} />
            </div>
            <div className="text-base">
                <div>
                    <h3 className="font-semibold" data-testid="voter-name">
                        {name}
                    </h3>
                    <p className="font-medium mt-1 text-xs text-gray-800" data-testid="vote-date">
                        {date}
                    </p>
                </div>
                <div className="mt-2">
                    <p data-testid="vote-reason">{description}</p>
                </div>
            </div>
        </div>
    );
}
