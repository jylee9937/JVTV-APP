import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import {useFlow} from "../StackFlow";

const MainPage: ActivityComponentType = () => {
    const { push } = useFlow();
    
    const onClick = (title: string) => {
        push("DetailPage", {
            title: title,
        });
    };
    
    return (
        <AppScreen appBar={{ title: "Main Page" }}>
            <header className="text-center">
                <h1 className="text-xl text-bold">오늘 당신의 역할은 무엇인가요?</h1>
                <h3 className="text-bold">오늘도 섬기는 당신! 천국에서 해같이 빛나리👐</h3>
            </header>
            <div className="flex flex-col gap-2 mt-4">
                <button onClick={()=> onClick("3캠 담당")}
                        className="text-violet11 hover:bg-mauve3 shadow-blackA7 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                    3캠 담당입니다
                </button>
                <button onClick={()=> onClick("4캠 담당")}
                        className="text-violet11 hover:bg-mauve3 shadow-blackA7 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                    4캠 담당입니다
                </button>
            </div>
        </AppScreen>
    );
};

export default MainPage;
