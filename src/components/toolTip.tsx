import styled from "styled-components"
import { ReactNode } from "react";

interface TooltipProps {
    children: ReactNode;
    message: string;
}

export const Tooltip = ({ children, message }: TooltipProps) => {
    return (
        <Wrapper>
            {children}
            <div className="tooltip">{message}</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  &:hover > .tooltip,
  &:active > .tooltip {
    visibility: visible;
    opacity: 1;
  }

  .tooltip {
    position: absolute;
    visibility: hidden; 
    opacity: 0; 
    transition: 0.2s;
    
    bottom: 50px; 
    left: 5%;
    background-color: white;
    border: none;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
    font-weight: 600;
    height: 40px;
    width: 230px;
    margin-bottom: 8px;
    z-index: 100;
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.09);

    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 8px 12px;
  }

  .tooltip::after {
    content: "";
    position: absolute;
    top: 100%; 
    left: 10%;
    border-width: 6px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
`;
