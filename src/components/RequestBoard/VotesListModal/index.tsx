import Votes from "./Votes";
import { DUMMY_IMAGE } from "@/constants/images";
import votes_description from "../../../../mock/votesDescription.json";

export default function VotesListModal() {
    return (
        <div>
            <div className="absolute inset-0 w-full z-50"></div>
            <div className="rounded-md absolute h-max w-11/12 mx-auto bg-gray-100 translate-y-4 drop-shadow-md z-50">
                <div className="flex justify-between items-center bg-gray-400 rounded-t-md p-3 border-b-2 border-gray-600">
                    <h2 className="text-base font-bold">Member Votes:</h2>
                    <p className="text-base font-medium">20</p>
                </div>
                <div>
                    <Votes
                        src={DUMMY_IMAGE}
                        name="prakash"
                        date="16/07/2022"
                        description={votes_description.description}
                    />
                    <Votes
                        src={DUMMY_IMAGE}
                        name="prakash"
                        date="16/07/2022"
                        description={votes_description.description}
                    />
                </div>
            </div>
        </div>
    );
}
