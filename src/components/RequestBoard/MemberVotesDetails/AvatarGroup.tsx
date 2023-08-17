import Avatar from "./Avatar";

export default function AvatarGroup() {
    return (
        <div className="avatar-group flex [&>*:nth-child(1)]:z-30 [&>*:nth-child(2)]:z-20 [&>*:nth-child(3)]:z-10">
            <Avatar url="" alt="avatar" height={28} width={28} />
            <Avatar url="" alt="avatar" height={28} width={28} />
            <Avatar url="" alt="avatar" height={28} width={28} />
            <Avatar url="" alt="avatar" height={28} width={28} />
        </div>
    );
}
