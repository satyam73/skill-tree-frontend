"use client";
import { useQuery } from "@tanstack/react-query";
import Button from "@/components/Button/Button";
import EndorsementDetailsSlideOver from "@/components/endorsementDetailsSlideOver/EndorsementDetailsSlideOver";
import { useState } from "react";
import { useGetEndorsements } from "@/services/endorsements";

export default function Home() {
    const { data: endorsements, isLoading } = useGetEndorsements();
    console.log(endorsements);
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
