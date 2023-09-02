"use client";
import { useQuery } from "@tanstack/react-query";
import Button from "@/components/Button/Button";
import EndorsementDetailsSlideOver from "@/components/endorsementDetailsSlideOver/EndorsementDetailsSlideOver";
import { useState } from "react";

export default function Home() {
    const { data, isLoading } = useQuery({
        queryKey: ["endorsements"],
        queryFn: () => fetch("https://user1693641217292.requestly.dev/endorsements").then((res) => res.json()),
    });
    console.log(data);
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
