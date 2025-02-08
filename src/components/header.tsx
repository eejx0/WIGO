import styled from "styled-components"
import Logo from "../assets/logo.svg";

export const Header = () => {
    return (
        <Wrapper>
            <img src={Logo} alt="wigo"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 70px;
    background-color: white;
    padding-left: 150px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    > img {
        cursor: pointer;
    }
`;