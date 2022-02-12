import React from 'react';   
import { ScrollView } from "react-native";

import { Container } from "./styled";

import Header from "../../components/Header";
import CardSaldo from '../../components/CardSaldo';
import SectionActions from '../../components/SectionActions';

export default function Home(){
    return(
        <Container>
            <Header/>

            <CardSaldo/>

            <ScrollView
            >
                <SectionActions/>
            </ScrollView>
            
        </Container>
    );
}