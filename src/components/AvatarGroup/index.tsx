import Avatar from "../Avatar";

type VotesTypes = {
    img?: string;
    date: string;
    name: string;
    reason: string;
};

type AvatarGroupTypes = {
    votes: VotesTypes[];
};

export default function AvatarGroup({ votes }: AvatarGroupTypes) {
    const visibleAvatars = votes.slice(0, 3);
    const remainingAvatars = votes.slice(3);

    return (
        <div className="avatar-group flex [&>div]:mr-[-0.5rem] [&>*:nth-child(1)]:z-30 [&>*:nth-child(2)]:z-20 [&>*:nth-child(3)]:z-10">
            {visibleAvatars.map((vote) => {
                return <Avatar key={vote.name} name={vote.name} />;
            })}
            <p
                className={`flex justify-center items-center rounded-full w-[32px] h-[32px] text-xs ${
                    remainingAvatars.length > 0 && "border border-gray-400 hover:bg-gray-100 transition cursor-pointer"
                }`}
            >
                {remainingAvatars.length > 0 && <span data-testid="remaining-avatars">+{remainingAvatars.length}</span>}
            </p>
        </div>
    );
}
