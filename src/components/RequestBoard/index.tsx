import Button from "./Button";
import Icon from "./Icon";
import MemberVotesDetails from "./MemberVotesDetails";
import SkillLabel from "./MemberVotesDetails/SkillLabel";
import SearchBox from "./SearchBox";
import { FILTER_ICON, NEXT_ARROW_ICON, PREVIOUS_ARROW_ICON } from "@/constants/images";
import { BUTTON_ROUNDNESS, BUTTON_VARIENTS } from "@/constants/button";
import VotesListModal from "@/components/RequestBoard/VotesListModal";
import skillData from "../../../mock/usersSkillData.json";

export default function RequestBoard() {
    return (
        <div className="lg:bg-white rounded-2xl lg:shadow-[0px_0px_6px_rgba(0,0,0,0.06)] w-full lg:w-11/12 max-w-screen-xl mx-auto p-4 lg:p-12">
            <div className="flex gap-4 lg:items-center lg:justify-between flex-col lg:flex-row">
                <h1 className="text-2xl lg:text-4xl font-semibold">Request board</h1>
                <div className="flex gap-5">
                    <SearchBox />
                    <Button roundness={BUTTON_ROUNDNESS.PILL}>
                        <Icon iconUrl={FILTER_ICON} alt="prev" width={20} height={20} />
                        <span className="hidden lg:block text-sm">Filter</span>
                    </Button>
                </div>
            </div>
            <div className="hidden lg:grid grid-cols-[35%_25%_minmax(0,_1fr)] mt-16 p-4 border-y border-gray-400">
                <p className="text-base font-medium text-gray-800">Name</p>
                <p className="text-base font-medium text-gray-800">Skill</p>
                <p className="text-base font-medium text-gray-800">Votes</p>
            </div>
            <div className="mt-12 lg:mt-4 grid grid-cols-1 gap-8 lg:gap-0">
                {skillData.map((skillItem) => {
                    return (
                        <MemberVotesDetails key={skillItem.id} {...skillItem}>
                            <SkillLabel title={skillItem.skill} colorScheme={skillItem.color} />
                        </MemberVotesDetails>
                    );
                })}
            </div>
            <div className="mt-4 p-4 flex gap-4 justify-end">
                <Button roundness={BUTTON_ROUNDNESS.PILL} varient={BUTTON_VARIENTS.OUTLINED}>
                    <Icon iconUrl={PREVIOUS_ARROW_ICON} alt="prev" width={8} height={8} />
                    <span>Prev</span>
                </Button>
                <Button roundness={BUTTON_ROUNDNESS.PILL} varient={BUTTON_VARIENTS.SECONDARY}>
                    <span>Next</span>
                    <Icon iconUrl={NEXT_ARROW_ICON} alt="prev" width={8} height={8} />
                </Button>
            </div>

            <VotesListModal />
        </div>
    );
}
