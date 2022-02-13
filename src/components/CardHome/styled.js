import styled from "styled-components";

export const Container = styled.View` 
    padding: 4%;
    background-color: #ffffff;
    margin-top: 21px;
    border: 1px solid lightgrey;
    border-radius: 15px;
`;

export const Side = styled.View` 
    flex-direction: row;
`;

export const LeftSide = styled.View` 
    flex: 1;
`;

export const RightSide = styled.View` 
    align-self: center;
    text-align: right;
`;

export const Titulo = styled.Text` 
    padding-top: 15px;
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #506FDD;
`;

export const Valor = styled.Text` 
    font-size: 18px;
    font-weight: 700;
`;

export const Entrelinhas = styled.Text` 
    padding-top: 3px;
`;

export const Subtitulo = styled.Text` 
    font-size: 12px;
    font-weight: 500;
    padding-bottom: 0;
    margin-bottom: 0;
`;