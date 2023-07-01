import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import {Checkbox} from "../components/ui/checkbox";
import {useEffect, useState} from "react";
import firebase from "../config";

const roleInfoList = [
    {
        role: "3캠",
        checklist: ["삼각대 챙기기", "삼각대 설치하기",]
    },
    {
        role: "4캠",
        checklist: ["목사님 상단 중앙 모니터 확인하기", "목사님 상단 좌우 모니터 켜기"]
    },
    {
        role: "7캠",
        checklist: ["전체 카메라 세팅 확인", "촬영팀 연습 주도"]
    },
    {
        role: "8캠",
        checklist: ["지미집 콘솔 확인"]
    },
    {
        role: "중계",
        checklist: ["목사님 악보", "큐시트", "예배 스트리밍", "인터컴 소리 체크", "녹화 리스트 파일 작성", "녹화 여부 체크", "광고 작성"]
    },
    {
        role: "중계 서브",
        checklist: ["목사님 악보", "큐시트", "예배 스트리밍", "인터컴 소리 체크", "녹화 리스트 파일 작성", "녹화 여부 체크", "광고 작성"]
    },
    {
        role: "자막",
        checklist: ["찬양팀 찬양 자막", "봉헌송 자막", "특순 자료", "말씀 전 후 찬양", "목사님 말씀", "AVR 2개 켜기", "큐시트 확인 및 순서 자막 만들기", " 환경설정: 스테이지 디스플레이 설정", "큐설정, 핫키 설정", "말씀 제목 프롭스", "말씀 중 사진 안빠지는지 체크"]
    },
]

const cameraCheckList = ["카메라 세팅", "인터컴 소리 체크", "카메라 무빙 연습", "찬양 콘티 및 인도자 체크", "보면대 높이 체크", "배터리 체크", "삼각대 수평 체크"];

const getArray = (title: string) => {
    const checkList = roleInfoList[roleInfoList.findIndex((roleInfo) => roleInfo.role === title)].checklist;
    if(title.includes("캠")) return checkList.concat(cameraCheckList);
    return checkList;
}

type roleDatType = {
    roleName: string;
    checklist: string[];
}

const setRolesData = async () => {
    const rolesData: {} = roleInfoList.reduce((acc, roleInfo) => {
        // @ts-ignore
        acc[roleInfo.role] = {
            roleName: roleInfo.role,
            checklist: roleInfo.checklist.reduce((acc, task) => {
                // @ts-ignore
                acc[task] = false;
                return acc;
            }, {}),
        };
        return acc;
    }, []);
    
    await firebase.firestore().collection('rolesConfig').doc('fixedRoles').set(rolesData);
};

type testButtonProps = {
    state: boolean;
    label: string;
    title: string;
}

const TestButton = ({state, label, title} : testButtonProps) => {
    const updateTaskStatus = async (roleID, task, newStatus) => {
        const fixedRolesDocRef = firebase.firestore().collection('rolesConfig').doc('fixedRoles');
        await fixedRolesDocRef.update({
            [`${roleID}.checklist.${task}`]: newStatus
        });
        
        console.log(roleID, task, newStatus)
    };
    console.log(state, label, title)
    
    
    return(
        
        <div className="items-top flex space-x-2 px-[24px] py-[8px]">
            <Checkbox id="terms1" checked={state} onClick={() => {
                updateTaskStatus(title, label, !state);
            }}/>
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
}



type ArticleParams= {
    title: string;
};
const DetailPage: ActivityComponentType<ArticleParams> = ({ params }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [checkList, setCheckList] = useState<string[]>([]);
    const [stateList, setStateList] = useState<boolean[]>([]);
    
    const fetchData = async () => {
        const fixedRolesDoc = await firebase.firestore().collection('rolesConfig').doc('fixedRoles').get();
        const rolesData = fixedRolesDoc.data() as {}
        const testArr = Object.values(rolesData) as roleDatType[];
        const test = testArr.find((roleData) => roleData.roleName === params.title)?.checklist ?? []
        console.log(test);
        setCheckList(Object.keys(test));
        setStateList(Object.values(test) as unknown as boolean[]);
        setIsLoading(false);
    };
    
    useEffect(()=> {
        fetchData();
    }, [])
    
    if(isLoading){
        return <div>로딩 중...</div>
    }
    
    return (
        <AppScreen appBar={{ title: params.title }}>
            <div className="flex flex-col gap-2">
                {checkList.map((label, index) => {
                    return (
                        <TestButton state={stateList[index]}label={label} title={params.title}/>
                    )
                })}
            </div>
        </AppScreen>
    );
};

export default DetailPage;
