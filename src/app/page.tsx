"use client";
import Button from "@/components/Button/Button";
import EndorsementDetailsSlideOver from "@/components/endorsementDetailsSlideOver/EndorsementDetailsSlideOver";
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <main>
            <header className="h-20 bg-blue-700"></header>
            <Button onClick={handleOpen}>Open Drawer</Button>
            <EndorsementDetailsSlideOver endorsementId="abc2" onClose={handleOpen} open={open} />
        </main>
    );
}
