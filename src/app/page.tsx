import { IoFilterOutline } from "react-icons/io5";
import { GrPrevious, GrNext } from "react-icons/gr";
import Wrapper from "@/components/Wrapper/Wrapper";
import SearchBox from "@/components/SearchBox/SearchBox";
import Button from "@/components/Button/Button";
import RequestBoardTable from "@/components/RequestBoardTable";

export default function Home() {
    return (
        <main className="my-20">
            <div className="lg:bg-white rounded-2xl lg:shadow-[0px_0px_6px_rgba(0,0,0,0.04)] w-full lg:w-11/12 max-w-screen-xl mx-auto lg:p-12">
                <Wrapper>
                    <div className="flex gap-4 lg:items-center lg:justify-between flex-col lg:flex-row">
                        <h1 className="text-2xl lg:text-4xl font-semibold">Request board</h1>
                        <div className="flex gap-5">
                            <SearchBox />
                            <Button roundness="pill">
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
                        <Button roundness="pill" variant="outlined">
                            <GrPrevious />
                            <span>Prev</span>
                        </Button>
                        <Button roundness="pill" variant="secondary">
                            <span>Next</span>
                            <GrNext />
                        </Button>
                    </div>
                </Wrapper>
            </div>
        </main>
    );
}
