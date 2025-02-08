import styled from "styled-components"
import XIcon from "../../assets/x.svg";
import { Color } from "../../styles/color";

export const NonTravelingCard = () => {
    return (
        <Wrapper>
            <img src={XIcon} alt="x" />
            <TextWrapper>
                <Text>2월 8일은 여행이</Text>
                <PointText>없습니다</PointText>
            </TextWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 403px;
    background-color: white;
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.09);
    border: 1px solid rgba(0,0,0,0.09);
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`;

const Text = styled.span`
    font-size: 22px;
    font-weight: 700;
`;

const PointText = styled.span`
    font-size: 22px;
    font-weight: 700;
    color: ${Color.main};
`;