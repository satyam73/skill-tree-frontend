"use client";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {
    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["repoData"],
        queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json()),
    });
    console.log(data);
    return <div>Posts</div>;
};

export default Posts;
