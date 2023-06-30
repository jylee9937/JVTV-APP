import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import {useFlow} from "../StackFlow";
import {Button} from "@/components/ui/button";

const roleList = ["3캠", "4캠", "7캠", "8캠", "중계", "중계 서브", "자막", "말씀준비"];

const MainPage: ActivityComponentType = () => {
    const { push } = useFlow();
    
    const onClick = (title: string) => {
        push("DetailPage", {
            title: title,
        });
    };
    
    return (
        <AppScreen appBar={{ title: "JVTV CheckList" }}>
            <header className="text-center">
                <h1 className="text-xl text-bold">오늘 당신의 역할은 무엇인가요?</h1>
                <h3 className="text-bold">오늘도 섬기는 당신! 천국에서 해같이 빛나리👐</h3>
            </header>
            <div className="px-[24px]">
                <div className="flex flex-col gap-2 mt-4">
                    {roleList.map(role => <Button onClick={()=> onClick(role)} variant="outline">
                        {role+" 담당입니다"}
                    </Button>)}
                </div>
                <Button className="w-full mt-[24px]">
                    전체 진행 상황 보기
                </Button>
            </div>
        </AppScreen>
    );
};

export default MainPage;
