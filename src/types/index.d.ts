interface Skill {
    id;
    name: string;
    type: string;
}
interface User {
    id;
    name: string;
}
interface Endorsers extends User {
    description: string;
    type: "POSITIVE" | "NEGATIVE";
}
interface Endorsement {
    user: User;
    skill: Skill;
    created_at: Date;
    endorsers: Endorsers[];
}
