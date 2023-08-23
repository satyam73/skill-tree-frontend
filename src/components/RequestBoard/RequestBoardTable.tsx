import BoardCategoryRow from "./BoardCategoryRow";
import BoardDetailsRow from "./BoardDetailsRow";
import skillData from "../../../mock/usersSkillData.json";

export default function RequestBoardTable() {
    return (
        <div>
            <div className="hidden lg:grid grid-cols-[35%_25%_minmax(0,_1fr)] p-4 mt-16 border-y border-gray-400">
                <BoardCategoryRow name="Name" />
                <BoardCategoryRow name="Skill" />
                <BoardCategoryRow name="Votes" />
            </div>
            <div className="mt-12 lg:mt-4 grid grid-cols-1 gap-8 lg:gap-0">
                {skillData.map((skillItem) => {
                    return <BoardDetailsRow key={skillItem.id} {...skillItem} />;
                })}
            </div>
        </div>
    );
}
