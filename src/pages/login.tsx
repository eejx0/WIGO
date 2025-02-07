import styled from "styled-components"
import { Color } from "../styles/color";
import PictureImg from "../assets/loginPicture.png";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <Wrapper>
            <Picture />
            <LoginBox>
                <img src={Logo} alt="wigo" />
                <InputWrapper>
                    <Input placeholder="아이디를 작성해주세요"></Input>
                    <Input placeholder="비밀번호를 작성해주세요" type="password"></Input>
                </InputWrapper>
                <Link to={'/'}> 
                    <Button>로그인</Button>
                </Link>
            </LoginBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${Color.lightBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

const Picture = styled.div`
    background-image: url(${PictureImg});
    background-size: cover;
    width: 530px;
    height: 500px;
    border-radius: 20px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.18);
`;

const LoginBox = styled.div`
    width: 530px;
    height: 500px;
    border-radius: 20px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.18);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InputWrapper = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Input = styled.input`
    width: 308px;
    height: 40px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 15px;
    &:focus {
        border-color: ${Color.main};
        outline: none;
    }
    &::placeholder {
        color: rgba(0,0,0,0.3);
    }
`;

const Button = styled.button`
    width: 308px;
    height: 45px;
    background-color: ${Color.main};
    border-radius: 50px;
    border: none;
    font-size: 17px;
    font-weight: 600;
    color: white;
    margin-top: 160px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        background-color: ${Color.darkBlue};
    }
`;