import styled from "styled-components"
import MapSamplePicture from "../../assets/mapSample.svg";
import { Color } from "../../styles/color";
import Line from "../../assets/longLine.svg";
import RightArrow from "../../assets/rightArrow.svg";
import ListIcon from "../../assets/smallList.svg";
import VoteIcon from "../../assets/vote.svg";
import { LittleMap } from "./littleMap";

export const SideBar = () => {
    return (
        <Wrapper>
            <Container>
                <LittleMap />
                <img src={Line} alt=""/>
                <ExpensesWrapper>
                    <TitleWrapper>
                        <span>여행 비용</span>
                        <DetailWrapper>
                            <span>더보기</span>
                            <img src={RightArrow} alt=">" />
                        </DetailWrapper>
                    </TitleWrapper>
                    <ListWrapper>
                        <ListBox>
                            <img src={ListIcon} alt="*" />
                            <span>쉽고 빠른 환율 계산</span>
                        </ListBox>
                        <ListBox>
                            <img src={ListIcon} alt="*" />
                            <span>여행 비용 총 합 계산기 제공</span>
                        </ListBox>
                    </ListWrapper>
                </ExpensesWrapper>
                <VoteWrapper>
                    <SpanWrapper>
                        <span>갈까 말까,</span>
                        <span style={{color: '#66D6FF', marginLeft: '3px'}}>고민</span>
                        <span>될 땐</span>
                    </SpanWrapper>
                    <button>
                        <img src={VoteIcon} alt="" />
                        <p>투표 만들기</p>
                    </button>
                </VoteWrapper>
            </Container>
            <Button>저장하기</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    height: 600px;
    z-index: 999;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const MapWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${MapSamplePicture});
    background-size: cover;
    height: 160px;
    border-radius: 10px;
    > button {
        width: 143px;
        height: 35px;
        background-color: ${Color.main};
        border-radius: 50px;
        font-size: 15px;
        font-weight: 600;
        color: white;
        border: none;
        cursor: pointer;
        transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);

        &:hover {
            transform: scale(1.10);
            background-color: ${Color.darkBlue};
        }
    }
`;

const ExpensesWrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
        font-size: 17px;
        font-weight: 700;
    }
`;

const DetailWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    &:hover {
        transform: scale(1.10);
    }
    > span {
        font-size: 12px;
    }
    > img {
        width: 5px;
    }
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const ListBox = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    > span {
        font-size: 12px;
    }
    > img {
        width: 5px;
    }
`;

const VoteWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: space-between;
    height: 50px;
    > button {
        width: 120px;
        height: 30px;
        border-radius: 50px;
        border: none;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-weight: 600;
        color: white;
        background: linear-gradient(to right, #89E0FF 0%, #03BCFF 100%);
        cursor: pointer;
    }
`;

const SpanWrapper = styled.div`
    font-size: 15px;
    font-weight: 700;
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    border: none;
    background-color: white;
    border: 2px solid ${Color.main};
    height: 50px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 700;
    color: ${Color.main};
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: ${Color.main};
        color: white;
    }
`;