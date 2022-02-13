import styled from "styled-components";

export const Container = styled.View` 
    padding: 5% 5% 0 5%;
    flex: 1;
    background-color: #FFFFFF;
`;

export const Background = styled.View` 
    margin-top: 2%;
    align-items: center;
`;

export const Card = styled.View` 
    border-radius: 12px;
    padding: 5%;
    background-color: #506FDD;
    flex-direction: row;
    margin-bottom: 5%;
`;

export const LeftSide = styled.View` 
    flex: 0.4;
    align-self: center;
`;

export const MiddleSide = styled.View` 
    align-items: flex-start;
    flex: 1;
    align-self: center;
`;

export const RightSide = styled.View` 
    flex: 1;
    justify-content: flex-end;
    align-self: center;
    align-items: flex-end;
`;

export const CardNome = styled.Text` 
    color: white;
`;

export const CardNumber = styled.Text` 
    color: white;
    padding-top: 5px;
    font-size: 20px;
`;

export const TituloCard = styled.Text` 
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 10px;
    color: black;
    font-weight: 500;
`;