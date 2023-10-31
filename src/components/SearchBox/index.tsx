"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Input from "../Input";

export default function SearchBox() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <Input
            type="text"
            label="search"
            placeholder="search"
            name="search"
            value={searchQuery}
            icon={<BiSearch />}
            iconPosition="right"
            variant="filled"
            onChange={(e) => {
                setSearchQuery(e.target.value);
            }}
        />
    );
}
