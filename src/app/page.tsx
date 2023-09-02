"use client";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
    const { data, isLoading } = useQuery({
        queryKey: ["endorsements"],
        queryFn: () => fetch("https://user1693641217292.requestly.dev/endorsements").then((res) => res.json()),
    });
    console.log(data);
    return <main></main>;
}
