import styled, {keyframes} from "styled-components"
import Airplane from "../../assets/airplane.png";

export const WaitingScheduleCard = () => {
    return (
        <Wrapper>
            <img src={Airplane} alt="비행기" />
            <TextWrapper>
                <h2 style={{color: '#66D6FF'}}>여행기간</h2>
                <h2>을 기다리는 중입니다 ...</h2>
            </TextWrapper>
        </Wrapper>
    )
}

const airplaneFloat = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 270px;
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.09);
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    > img {
        width: 295px;
        height: 130px;
        animation: ${airplaneFloat} 3s infinite ease-in-out;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
`;