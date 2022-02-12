import React from 'react';   

import { Container, Titulo } from "./styled";

import Header from "../components/Header";
import CardSaldo from '../components/CardSaldo';
import SectionActions from '../components/SectionActions';

export default function Home(){
    return(
        <Container>
            <Header/>

            <CardSaldo/>

            <SectionActions/>
            
        </Container>
    );
}