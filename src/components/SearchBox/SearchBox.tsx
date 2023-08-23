import { BiSearch } from "react-icons/bi";
import Input from "../Input/Input";

export default function SearchBox() {
    return (
        <Input
            type="text"
            label="search"
            placeholder="search"
            name="search"
            value=""
            icon={<BiSearch />}
            iconPosition="right"
            variant="filled"
        />
    );
}
