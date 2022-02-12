import styled from "styled-components/native";

export const Container = styled.View` 
    flex: 1;
    background-color: #506FDD;
`;

export const Logo = styled.Text` 
    font-size: 50px;
    color: white;
    font-weight: 700;
    letter-spacing: -4px;
`;

export const LogoArea = styled.View` 
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Botao = styled.TouchableOpacity` 
    background-color: white;
    color: black;
    border-radius: 50px;
    margin: 5%;
    padding: 5%;
`;

export const TextoBotao = styled.Text` 
    align-self: center;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2px;
`;