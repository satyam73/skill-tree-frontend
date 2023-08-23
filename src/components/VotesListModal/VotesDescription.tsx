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
                <Avatar name="Manish" src={src} width={40} height={40} />
            </div>
            <div className="text-base">
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="font-medium mt-1 text-xs text-gray-800">{date}</p>
                </div>
                <div className="mt-2">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
