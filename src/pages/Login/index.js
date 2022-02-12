import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Logo, Botao, TextoBotao, LogoArea } from "./styled";

export default function Login(){
    const navigation = useNavigation();

    return(
        <Container>
            <LogoArea>
                <Logo>Amobank</Logo>
            </LogoArea>

            <Botao 
            onPress={() => navigation.navigate('Home') }
            >
                <TextoBotao>
                    Entrar
                </TextoBotao>
            </Botao>
        </Container>
    );
}