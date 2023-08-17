import { ReactNode } from "react";
import Button from "../Button";
import AvatarGroup from "./AvatarGroup";
import { BUTTON_VARIENTS } from "@/constants/button";

type MemberVotesDetailsProps = {
    name: string;
    children: ReactNode;
};

export default function MemberVotesDetails({ children, name }: MemberVotesDetailsProps) {
    return (
        <div className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] lg:grid-cols-[35%_25%_minmax(0,_1fr)] lg:px-4 lg:py-4 gap-4 lg:gap-0 border-b lg:border-0 border-gray-400 pb-8">
            <div>
                <p className="text-2xl whitespace-nowrap w-[80%] text-ellipsis overflow-hidden lg:text-base font-semibold text-black-dark">
                    {name}
                </p>
            </div>
            <div className="ml-auto lg:m-0">{children}</div>
            <div className="flex flex-col gap-8 lg:flex-row justify-between col-span-full lg:col-start-3">
                <div className="flex gap-8">
                    <AvatarGroup />
                    <p className="flex justify-center items-center rounded-full w-[28px] h-[28px] text-xs border">+8</p>
                </div>
                <div className="grid gap-3 grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]">
                    <Button varient={BUTTON_VARIENTS.PRIMARY}>Approve</Button>
                    <Button varient={BUTTON_VARIENTS.TEXT}>Reject</Button>
                </div>
            </div>
        </div>
    );
}
