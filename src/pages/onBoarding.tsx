import styled from "styled-components"
import { Header } from "../components/header"
import Background from "../assets/backgroundImg.png";
import { Color } from "../styles/color";
import { Link } from "react-router-dom";

export const OnBoarding = () => {
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
                        <Link to={'/signUp'}>
                            <SignUpButton>회원가입</SignUpButton>
                        </Link>
                        <Link to={'/login'}>
                            <LoginButton>로그인</LoginButton>
                        </Link>
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
    height: calc(100vh - 70px);
    overflow: hidden;
    position: relative;
`;

const BackgroundImg = styled.div`
    background-image: url(${Background});
    background-size: cover;
    width: 100vw;
    height: 450px;
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

const SignUpButton = styled.button`
    width: 222px;
    height: 45px;
    border-radius: 50px;
    background-color: ${Color.main};
    color: white;
    border: none;
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);

    &:hover {
        transform: scale(1.10);
        background-color: ${Color.darkBlue};
    }
`;

const LoginButton = styled.button`
    width: 222px;
    height: 45px;
    border-radius: 50px;
    background-color: white;
    color: ${Color.main};
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    border: none;
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);

    &:hover {
        transform: scale(1.10);
        color: ${Color.darkBlue};
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