import { REQUEST_BOARD_TABLE_CATEGORIES } from "@/constants/request-board";

export default function BoardCategoryRow() {
    return (
        <>
            {Object.values(REQUEST_BOARD_TABLE_CATEGORIES).map((category) => {
                return (
                    <p key={category} className="text-base font-medium text-gray-800">
                        {category}
                    </p>
                );
            })}
        </>
    );
}
