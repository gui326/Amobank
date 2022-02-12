import React from "react";
import { CardArea, Card, Titulo } from "./styled";
import { useNavigation } from "@react-navigation/native";

export default function SectionActions(){
    const navigation = useNavigation();

    return(
        <CardArea>
            <Card>
                <Titulo>Pix</Titulo>
            </Card>
            <Card>
                <Titulo>Pagar</Titulo>
            </Card>
            <Card
                onPress={ () => navigation.navigate('Cartoes') }
            >
                <Titulo>Cartões</Titulo>
            </Card>
            <Card>
                <Titulo>Transfer</Titulo>
            </Card>
        </CardArea>
    )
}