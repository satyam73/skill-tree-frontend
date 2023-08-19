"use client";
import Drawer from "@/components/Drawer";
import Button from "@/components/button/Button";
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
                lor
            </Drawer>
        </main>
    );
}
