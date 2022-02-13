import React from 'react';   
import { ScrollView } from "react-native";

import { Container } from "./styled";

import Header from "../../components/Header";
import CardSaldo from '../../components/CardSaldo';
import SectionActions from '../../components/SectionActions';
import CardHome from '../../components/CardHome';

export default function Home(){
    return(
        <Container>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >

                <Header/>

                <CardSaldo/>

                <SectionActions/>

                <CardHome 
                icone="credit-card" 
                valor="1.500,00" 
                titulo="Cartão de Crédito" 
                subtitulo="Fatura atual"
                entrelinhas="Limite disponível até R$ 806,00"
                navegar="Fatura"
                />

                <CardHome 
                icone="hand-holding-usd" 
                valor="25.500,00" 
                titulo="Empréstimo" 
                subtitulo="Valor disponível de até"
                />

                <CardHome 
                icone="heart" 
                valor="25,00/mês" 
                titulo="Seguro de Vida" 
                subtitulo="Você seguro com a gente"
                />

                <CardHome 
                icone="chart-bar" 
                valor="5,00/valor mínimo" 
                titulo="Investimentos" 
                subtitulo="Investa também"
                />

            </ScrollView>
            
        </Container>
    );
}