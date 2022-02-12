import React from "react";
import { Image } from "react-native";

import Header from "../components/Header";

import { Container, Background } from "./styled";

export default function Cartoes(){
    return(
        <Container>
            <Header/>

            <Background>
                <Image
                source={require('../../assets/images/backgroundCard.png')}
                />
            </Background>
        </Container>
    );
}