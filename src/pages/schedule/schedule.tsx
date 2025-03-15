import { Header } from "../../components/header"
import { Calender } from "../../components/schedule/calender"
import styled from "styled-components"
import { Color } from "../../styles/color"
import { NonTravelingCard } from "../../components/schedule/nonTravelingCard"
import { TravelingCard } from "../../components/schedule/travelingCard"
import PlusIcon from "../../assets/plus.svg";
import MapIcon from "../../assets/mapIcon.svg";
import ExpensesIcon from "../../assets/expensesIcon.svg";
import { useState } from "react"
import { Link } from "react-router-dom"
import { Tooltip } from "../../components/toolTip"

export const Schedule = () => {
    const [isTraveling, setIsTraveling] = useState(true);
    return (
        <>
            <Header />
            <Wrapper>
                <CalenderWrapper>
                    <Calender />
                </CalenderWrapper>
                <CardWrapper>
                    {isTraveling ? <TravelingCard /> : <NonTravelingCard/>}
                    <ButtonWrapper>
                        <DetailButton>자세히 보기</DetailButton>
                        <Tooltip message="내가 갈 장소를 기록해요 😉">
                            <PlaceAddButton>
                                <img src={MapIcon} alt="map" />
                            </PlaceAddButton>
                        </Tooltip>
                        <Tooltip message="내가 낼 비용을 기록해요 💶">
                            <ExpensesAddButton>
                                <img src={ExpensesIcon} alt="" />
                            </ExpensesAddButton>
                        </Tooltip>
                        <Link to={'/schedule/add'}>
                            <AddButton>
                                <img src={PlusIcon} alt="+" />
                            </AddButton>
                        </Link>
                    </ButtonWrapper>
                </CardWrapper>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    padding-left: 150px;
    padding-right: 150px;
    height: 100%;
    justify-content: center;
    margin-top: 60px;
    overflow: hidden; 
    width: 100vw;
    margin-top: 130px;
`;

const CalenderWrapper = styled.div`
    width: 65%; 
    max-width: 770px; 
    height: auto;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    gap: 20px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 45px;
    justify-content: space-between;
    bottom: 0;
`;

const DetailButton = styled.button`
    border: none;
    width: 45%;
    height: 100%;
    background-color: ${Color.main};
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        background-color: ${Color.darkBlue};
    }
`;

const PlaceAddButton = styled.div`
    width: 15%;
    height: 100%;
    background: linear-gradient(to top, #CCF1FF 0%, #66D6FF 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative; /* 툴팁이 이 기준으로 배치됨 */
    min-width: 65px; /* 버튼 크기 강제 */
    min-height: 45px;

    > img {
        width: 20px;
    }
`;

const ExpensesAddButton = styled.div`
    width: 15%;
    height: 100%;
    background: linear-gradient(to top, #CCF1FF 0%, #66D6FF 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative; /* 툴팁이 이 기준으로 배치됨 */
    min-width: 65px; /* 버튼 크기 강제 */
    min-height: 45px;

    > img {
        width: 20px;
    }
`;

const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 45px;
    border-radius: 50%;
    border: 3px solid ${Color.main};
    cursor: pointer;
`;