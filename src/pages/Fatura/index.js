import React from "react";
import { Container, BlocoFatura, BlocoItem, Card, TituloCompra, ValorCompra, Subtitulo, ValorFatura, Entrelinhas, Fechamento } from "./styled";
import HeaderInterno from "../../components/HeaderInterno";
import { ScrollView } from "react-native";

export default function Fatura(){
    const itemsGastos = [
        {
            id: 1,
            titulo: 'Shopping MC',
            valor: '15,00'
        },
        {
            id: 2,
            titulo: 'BK',
            valor: '75,00'
        },
        {
            id: 3,
            titulo: 'Mag',
            valor: '1.115,00'
        },
        {
            id: 4,
            titulo: 'Mag',
            valor: '1.515,00'
        },
        {
            id: 5,
            titulo: 'Luiza',
            valor: '515,00'
        }
    ];
    
    return(
        <Container>
            <HeaderInterno titulo="Fatura"/>

            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <BlocoFatura>
                    <Subtitulo>Fatura atual</Subtitulo>
                    <ValorFatura>R$ 1.320,54</ValorFatura>
                    <Entrelinhas>Limite disponível R$ 808,23</Entrelinhas>
                    <Fechamento>Fecha em 10 MAR</Fechamento>
                </BlocoFatura>
                <BlocoItem>
                    {itemsGastos.map((value) => 
                        <Card key={value.id}>
                            <TituloCompra>{value.titulo}</TituloCompra>
                            <ValorCompra>R$ {value.valor}</ValorCompra>
                        </Card>
                    )}
                </BlocoItem>
            </ScrollView>
        </Container>
    );
}