import VotesDescription from "./VotesDescription";

type VotesTypes = {
    img?: string;
    date: string;
    name: string;
    reason: string;
};

type VotesListModalTypes = {
    votes: VotesTypes[];
    onClose: () => void;
};

function renderVotes(votes: VotesTypes[]) {
    return votes.map((vote) => {
        return (
            <VotesDescription
                key={vote.name}
                src={vote.img}
                name={vote.name}
                date={vote.date}
                description={vote.reason}
            />
        );
    });
}

export default function VotesListModal({ votes, onClose }: VotesListModalTypes) {
    return (
        <div>
            <div className="fixed w-full inset-0 z-50" onClick={onClose} data-testid="close-modal"></div>
            <div className="rounded-md absolute h-max w-11/12 lg:w-[400px] mx-auto bg-[#fff] translate-y-4 drop-shadow-md z-50 lg:translate-x-[-30%] lg:translate-y-[5%]">
                <div className="flex justify-between items-center rounded-t-md bg-[#F9FAFB] p-3 border-b border-gray-400 lg:p-4">
                    <h2 className="text-base font-bold lg:text-xl" data-testid="votes-title">
                        Member Votes:
                    </h2>
                    <p className="text-base font-medium lg:text-xl" data-testid="votes-length">
                        {votes.length}
                    </p>
                </div>
                <div className="h-[250px] lg:h-[300px] overflow-y-auto">{renderVotes(votes)}</div>
            </div>
        </div>
    );
}
