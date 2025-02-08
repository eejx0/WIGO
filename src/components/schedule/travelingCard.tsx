import styled from "styled-components"
import ListIcon from "../../assets/list.svg";
import { Color } from "../../styles/color";

const ScheduleList = [
    { id: 1, schedule: "맛집가기" },
    { id: 2, schedule: "사진찍기" },
    { id: 3, schedule: "바다 보러 가기" },
    { id: 4, schedule: "바다 보러 가기" },
    { id: 5, schedule: "바다 보러 가기" },
    { id: 6, schedule: "바다 보러 가기" },
    { id: 7, schedule: "바다 보러 가기" },
    { id: 8, schedule: "바다 보러 가기" },
]

export const TravelingCard = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <span>오늘은</span>
                <h3>"강원도 가족 여행"</h3>
                <span>일정이 있습니다</span>
            </TextWrapper>
            <ListWrapper>
                {ScheduleList.map((item) => {
                    return (
                        <ListBox key={item.id}>
                            <img src={ListIcon} alt="*" />
                            <span>{item.schedule}</span>
                        </ListBox>
                    )
                })}
            </ListWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 420px;
    background-color: white;
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.09);
    border: 1px solid rgba(0,0,0,0.09);
    padding: 40px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    > span {
        font-size: 15px;
        font-weight: 600;
    }
    > h3 {
        font-size: 20px;
        font-weight: 700;
        color: ${Color.main}
    }
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin-top: 30px;
    overflow-y: auto;
    overflow-x: hidden;
`;

const ListBox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    > span {
        font-size: 15px;
        font-weight: 600;
        white-space: normal;
        overflow-wrap: break-word;
        max-width: calc(100% - 40px);
    }
`;