"use client";
import Drawer from "@/components/Drawer";
import Icon from "@/components/Icon";
import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import { CHECKMARK, CROSS } from "@/constants/images";
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <main>
            <Button onClick={handleOpen}>Open Drawer</Button>
            <Drawer open={open} onClose={handleOpen}>
                <h1 className="text-5xl font-semibold mb-4">Oppenheimer ✨</h1>
                <h3 className="text-2xl font-semibold mb-10">12 Jan 2023</h3>
                <h3 className="text-2xl font-medium mb-1">Skills: Pinning in Rust</h3>
                <h6 className="text-xl mb-4 text-gray-700">Endorsers: Vaibhav, Yash, Tejas</h6>
                <span className="rounded-full py-1 px-2 bg-yellow-light font-medium ">
                    {" "}
                    <span> Atomic</span>
                </span>
                <div className="flex gap-4 mt-8 mb-6">
                    <Button icon={<Icon iconUrl={CHECKMARK} width={16} height={16} alt="checkmark icon" />}>
                        Approve
                    </Button>
                    <Button color="error" icon={<Icon iconUrl={CROSS} width={16} height={16} alt="cross icon" />}>
                        Reject
                    </Button>
                </div>
                <h3 className="text-2xl font-semibold mb-10">Endorsements</h3>
                <ul>
                    <Card
                        name="Vaibhav"
                        description="Lorem ipsum dolor sit amet consectetur. Lacus consequat non porttitor faucibus. Mattis nec felis sagittis justo id volutpat. Et ut non semper quam a consectetur Et ut non semper quam a consectetur."
                    />
                    <Card
                        name="Vaibhav"
                        description="Lorem ipsum dolor sit amet consectetur. Lacus consequat non porttitor faucibus. Mattis nec felis sagittis justo id volutpat. Et ut non semper quam a consectetur Et ut non semper quam a consectetur."
                    />
                    <Card
                        name="Vaibhav"
                        description="Lorem ipsum dolor sit amet consectetur. Lacus consequat non porttitor faucibus. Mattis nec felis sagittis justo id volutpat. Et ut non semper quam a consectetur Et ut non semper quam a consectetur."
                    />
                </ul>
            </Drawer>
        </main>
    );
}
