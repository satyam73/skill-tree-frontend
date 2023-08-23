import { IoFilterOutline } from "react-icons/io5";
import { GrPrevious, GrNext } from "react-icons/gr";
import Button from "./Button";
import Wrapper from "./Wrapper";
import SearchBox from "./SearchBox";
import RequestBoardTable from "./RequestBoardTable";
import { BUTTON_ROUNDNESS, BUTTON_VARIENTS } from "@/constants/button";

export default function RequestBoard() {
    return (
        <div className="lg:bg-white rounded-2xl lg:shadow-[0px_0px_6px_rgba(0,0,0,0.06)] w-full lg:w-11/12 max-w-screen-xl mx-auto lg:p-12">
            <Wrapper>
                <div className="flex gap-4 lg:items-center lg:justify-between flex-col lg:flex-row">
                    <h1 className="text-2xl lg:text-4xl font-semibold">Request board</h1>
                    <div className="flex gap-5">
                        <SearchBox />
                        <Button roundness={BUTTON_ROUNDNESS.PILL}>
                            <IoFilterOutline />
                            <span className="hidden lg:block text-sm">Filter</span>
                        </Button>
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <RequestBoardTable />
            </Wrapper>
            <Wrapper>
                <div className="mt-4 p-4 flex gap-4 justify-end">
                    <Button roundness={BUTTON_ROUNDNESS.PILL} varient={BUTTON_VARIENTS.OUTLINED}>
                        <GrPrevious />
                        <span>Prev</span>
                    </Button>
                    <Button roundness={BUTTON_ROUNDNESS.PILL} varient={BUTTON_VARIENTS.SECONDARY}>
                        <span>Next</span>
                        <GrNext style={{ fill: "white" }} />
                    </Button>
                </div>
            </Wrapper>
        </div>
    );
}
