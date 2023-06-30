import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import {Checkbox} from "../components/ui/checkbox";

const camera3 = ["카메라 챙기기", "조끼 입기", "배터리 챙기기", "삼각대 챙기기", "삼각대 설치하기", "인터컴 챙기기", "인터컴 확인하기", "삼각대 수평 확인하기"];

const camera4 = ["카메라 챙기기", "조끼 입기", "배터리 챙기기", "인터컴 챙기기", "인터컴 확인하기", "목사님 상단 중앙 모니터 확인하기", "목사님 상단 좌우 모니터 켜기"];

type ArticleParams= {
    title: string;
};
const DetailPage: ActivityComponentType<ArticleParams> = ({ params }) => {
    const checkList = params.title === "3캠 담당" ? camera3 : camera4;
    
    return (
        <AppScreen appBar={{ title: params.title }}>
            <form className="flex flex-col gap-2">
                {checkList.map((label, index) => {
                    return (
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms1" />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {label}
                                </label>
                            </div>
                        </div>
                    )
                })}
            </form>
        </AppScreen>
    );
};

export default DetailPage;
