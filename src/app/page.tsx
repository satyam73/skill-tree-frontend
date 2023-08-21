"use client";
import Drawer from "@/components/Drawer";
import Button from "@/components/button/Button";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
import * as drawerData from "../../__mocks__/drawer.json";
import CardList from "@/components/card/CardList";

export default function Home() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <main>
            <Button onClick={handleOpen}>Open Drawer</Button>
            <Drawer open={open} onClose={handleOpen}>
                <h1 className="text-5xl font-semibold mb-4">{drawerData.title}</h1>
                <h3 className="text-2xl font-semibold mb-10">{drawerData.date}</h3>
                <h3 className="text-2xl font-medium mb-1">Skills: {drawerData.skills}</h3>
                <h6 className="text-xl mb-4 text-gray-700">Endorsers: {drawerData.endorsers.join(", ")}</h6>
                <span className="rounded-full py-1 px-2 bg-yellow-light font-medium ">
                    {" "}
                    <span>Atomic</span>
                </span>
                <div className="flex gap-4 mt-8 mb-6">
                    <Button icon={<IoCheckmarkSharp />}>Approve</Button>
                    <Button color="error" icon={<RxCross2 />}>
                        Reject
                    </Button>
                </div>
                <h3 className="text-2xl font-semibold mb-10">Endorsements</h3>
                <CardList data={drawerData.endorsements} />
            </Drawer>
        </main>
    );
}
