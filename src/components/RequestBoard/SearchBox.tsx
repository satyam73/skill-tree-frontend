import Icon from "./Icon";
import Input from "./Input";
import { SEARCH_ICON } from "@/constants/images";

export default function SearchBox() {
    return (
        <div className="flex bg-gray-100 rounded-[50px] py-3 px-5 w-max text-base">
            <Input placeholder="Search" type="text" />
            <Icon iconUrl={SEARCH_ICON} alt="Search" width={20} height={20} />
        </div>
    );
}
