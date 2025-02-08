import styled from "styled-components"
import { Header } from "../components/header"
import Background from "../assets/backgroundImg.png";
import { Color } from "../styles/color";
import { ReactComponent as CalendarIcon } from '../assets/homeCalenderIcon.svg';
import { ReactComponent as PlaceIcon } from "../assets/homePlaceIcon.svg";
import { ReactComponent as WriteIcon } from "../assets/homeWriteIcon.svg";
import { ReactComponent as CoinIcon } from "../assets/homeCoinIcon.svg";
import { ReactComponent as VoteIcon } from "../assets/homeVoteIcon.svg";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <BackgroundImg>
                    <p className="Hakgyo">우리의 여행, </p>
                    <TextWrapper>
                        <Point className="Hakgyo">WIGO</Point>
                        <p className="Hakgyo">와 함께 떠나요</p>
                    </TextWrapper>
                    <ButtonWrapper>
                        <Link to={'/schedule'}>
                            <ButtonBox>
                                <CalendarIcon />
                                <p>일정</p>
                            </ButtonBox>
                        </Link>
                        <ButtonBox>
                            <PlaceIcon />
                            <p>장소</p>
                        </ButtonBox>
                        <ButtonBox>
                            <WriteIcon />
                            <p>기록</p>
                        </ButtonBox>
                        <ButtonOtherBox>
                            <CoinIcon />
                            <p>비용</p>
                        </ButtonOtherBox>
                        <ButtonOtherBox>
                            <VoteIcon />
                            <p>투표</p>
                        </ButtonOtherBox>
                    </ButtonWrapper>
                </BackgroundImg>
                <Wave2></Wave2>
                <Wave1></Wave1>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const BackgroundImg = styled.div`
    background-image: url(${Background});
    background-size: cover;
    width: 100vw;
    height: 450px;
    margin-top: 70px;
    border-bottom-right-radius: 80px;
    border-bottom-left-radius: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    > p {
        font-size: 45px;
        color: white;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    margin-top: 10px;
    > p {
        font-size: 45px;
        color: white;
    }
`;

const Point = styled.p`
    font-size: 45px;
    color: ${Color.main} !important;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    margin-top: 80px;
`;

const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: white;
    width: 90px;
    height: 90px;
    border-radius: 20px;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);

    &:hover {
        transform: scale(1.10);
        color: white;
        svg path {
            fill: white; 
        }
        background-color: ${Color.main};
    }

    > p {
        font-size: 12px;
        font-weight: 600;
    }
`;

const ButtonOtherBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
background-color: white;
width: 90px;
height: 90px;
border-radius: 20px;
cursor: pointer;
transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);

&:hover {
    transform: scale(1.10);
    color: white;
    svg path {
        stroke: white; 
    }
    background-color: ${Color.main};
}

> p {
    font-size: 12px;
    font-weight: 600;
}
`;

const Wave1 = styled.div`
    position: absolute;
    bottom: -195vw;
    left: 50%;
    width: 200vw;
    height: 200vw;
    margin-left: -100vw;
    border-radius: 40%;
    animation: waveAnimation 20000ms infinite linear;
    background: ${Color.lightBlue};
    opacity: 0.7;
    @keyframes waveAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Wave2 = styled.div`
    position: absolute;
    bottom: -195vw;
    left: 50%;
    width: 200vw;
    height: 200vw;
    margin-left: -100vw;
    border-radius: 40%;
    animation: waveAnimation 15000ms infinite linear;
    background: ${Color.main};
    @keyframes waveAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;