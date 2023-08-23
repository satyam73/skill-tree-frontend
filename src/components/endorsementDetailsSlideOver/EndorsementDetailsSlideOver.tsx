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
        <Drawer open={open} onClose={onClose} top={20}>
            <h1 className="text-4xl lg:text-5xl font-semibold mb-4">{data?.title}</h1>
            <h3 className="text-2xl font-semibold mb-10">{data?.date}</h3>
            <h3 className="text-2xl font-medium mb-1">Skills: {data?.skills}</h3>
            <h6 className="text-xl mb-4 text-gray-700">Endorsers: {data?.endorsers.join(", ")}</h6>
            <Tag>Atomic</Tag>
            <div className="flex gap-4 mt-8 mb-6">
                <Button icon={<IoCheckmarkSharp />}>Approve</Button>
                <Button color="error" icon={<RxCross2 />}>
                    Reject
                </Button>
            </div>
            <h3 className="text-2xl font-semibold mb-10">Endorsements</h3>

            <ul>
                {data?.endorsements.map((end) => (
                    <EndorsementCard name={end.name} description={end.description} key={end.id} />
                ))}
            </ul>
        </Drawer>
    );
};

export default EndorsementDetailsSlideOver;
