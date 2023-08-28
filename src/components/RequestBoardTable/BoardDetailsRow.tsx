"use client";

import { useState, useRef } from "react";
import AvatarGroup from "../AvatarGroup/AvatarGroup";
import Button from "../Button/Button";
import SkillLabel from "../SkillLabel/SkillLabel";
import VotesListModal from "../VotesListModal";

type VotesTypes = {
    img?: string;
    date: string;
    name: string;
    reason: string;
};

type BoardDetailsRowProps = {
    name: string;
    skill: string;
    color: string;
    votes: VotesTypes[];
};

export default function BoardDetailsRow({ name, skill, color, votes }: BoardDetailsRowProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState("below");
    const openModalButtonRef = useRef<HTMLSpanElement>(null);

    function handleOpenModal() {
        if (openModalButtonRef.current) {
            const buttonRect = openModalButtonRef.current ? openModalButtonRef.current.getBoundingClientRect() : null;
            if (buttonRect) {
                const spaceAbove = buttonRect ? buttonRect.top : 0;
                const spaceBelow = window.innerHeight - buttonRect.bottom;
                console.log("space", spaceAbove, spaceBelow);

                if (spaceAbove > spaceBelow) {
                    setModalPosition("above");
                } else {
                    setModalPosition("below");
                }
            }
        }
    }

    return (
        <div className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] lg:grid-cols-[35%_25%_minmax(0,_1fr)] lg:px-4 lg:py-4 gap-4 lg:gap-0 border-b lg:border-0 border-gray-400 pb-8">
            <div>
                <p className="capitalize text-2xl whitespace-nowrap w-[80%] text-ellipsis overflow-hidden lg:text-base font-semibold text-black-dark">
                    {name}
                </p>
            </div>
            <div className="ml-auto lg:m-0">
                <SkillLabel title={skill} colorScheme={color} />
            </div>
            <div className="flex flex-col gap-8 lg:flex-row justify-between col-span-full lg:col-start-3">
                <div className="flex gap-8">
                    <div className="">
                        <span
                            ref={openModalButtonRef}
                            className="block cursor-pointer"
                            onClick={() => {
                                handleOpenModal();
                                setIsModalOpen(true);
                            }}
                        >
                            <AvatarGroup votes={votes} />
                        </span>
                        {isModalOpen && (
                            <VotesListModal
                                votes={votes}
                                onClose={() => setIsModalOpen(false)}
                                modalPosition={modalPosition}
                            />
                        )}
                    </div>
                    <p className="flex justify-center items-center rounded-full w-[32px] h-[32px] text-xs border">+8</p>
                </div>
                <div className="grid gap-3 grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]">
                    <Button variant="primary">Approve</Button>
                    <Button variant="text">Reject</Button>
                </div>
            </div>
        </div>
    );
}
