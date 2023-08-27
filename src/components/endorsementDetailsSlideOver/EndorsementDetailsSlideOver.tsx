import React from "react";
import Drawer from "../drawer/Drawer";
import Tag from "../tag/Tag";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
import Button from "../button/Button";
import * as endorsementDetails from "../../../__mocks__/endorsementDetails.json";
import EndorsementCard from "../endorsementCard/EndorsementCard";

type EndorsementDetailsSlideOverProps = {
    endorsementId: string;
    open: boolean;
    onClose: () => void;
};

const EndorsementDetailsSlideOver = ({ endorsementId, open, onClose }: EndorsementDetailsSlideOverProps) => {
    const data = endorsementDetails.find((end) => end.id === endorsementId);

    return (
        <Drawer open={open} onClose={onClose}>
            <div className="p-6 pt-24 bg-yellow-100">
                <h1 className="text-4xl lg:text-5xl font-semibold mb-4">{data?.title}</h1>
                <h3 className="text-2xl font-semibold mb-10">{data?.date}</h3>
                <h3 className="text-2xl font-medium mb-1">Skills: {data?.skills}</h3>
                <h6 className="text-xl mb-4 text-gray-700">Endorsers: {data?.endorsers.join(", ")}</h6>
                <Tag>Atomic</Tag>
            </div>

            <div className="p-6 pt-10">
                <h3 className="text-2xl font-semibold mb-8">Endorsements</h3>

                <ul>
                    {data?.endorsements.map((end) => (
                        <EndorsementCard name={end.name} description={end.description} key={end.id} />
                    ))}
                </ul>
            </div>

            <div className="fixed bottom-0 right-0 w-3/4 sm:w-1/2 lg:w-1/3 flex justify-between gap-4 py-4 px-6 bg-blue-100 border border-solid border-blue-300">
                <Button icon={<IoCheckmarkSharp />} block={true}>
                    Approve
                </Button>
                <Button color="error" icon={<RxCross2 />} block={true}>
                    Reject
                </Button>
            </div>
        </Drawer>
    );
};

export default EndorsementDetailsSlideOver;
