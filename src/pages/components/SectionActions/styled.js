import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

export const CardArea = styled.View` 
    width: 100%;
    flex-direction: row;
    margin-top: 4%;
`;

export const Card = styled.TouchableOpacity` 
    flex: 1;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex: 1;
    margin: 2%;
    border: 1px solid lightgrey;
    border-radius: 15px;
    padding: 5% 2%;
    background: #506FDD;
    align-self: center;
`;

export const Titulo = styled.Text` 
    color: white;
    letter-spacing: -1px;
`;