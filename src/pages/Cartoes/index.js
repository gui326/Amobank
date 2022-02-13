import React from "react";
import { Image } from "react-native";
import { Container, TituloCard, Background, Card, LeftSide, RightSide, MiddleSide, CardNome, CardNumber } from "./styled";

import HeaderInterno from "../../components/HeaderInterno";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";

export default function Cartoes(){
    return(
        <Container>
            <HeaderInterno titulo="Meus Cartões"/>

            <ScrollView
            showsVerticalScrollIndicator={false}
            >

                <Background>
                    <Image
                    source={require('../../assets/images/backgroundCard.png')}
                    />
                </Background>

                <TituloCard>Cartões Físicos</TituloCard>

                <Card>
                    <LeftSide>
                        <FontAwesome
                        name="credit-card"
                        size={30}
                        />
                    </LeftSide>
                    <MiddleSide>
                        <CardNome>Guilherme B Silva</CardNome>
                        <CardNumber>1237 ****</CardNumber>
                    </MiddleSide>
                    <RightSide>
                        <FontAwesome
                        name="chevron-right"
                        size={20}
                        />
                    </RightSide>
                </Card>

                <Card>
                    <LeftSide>
                        <FontAwesome
                        name="credit-card"
                        size={30}
                        />
                    </LeftSide>
                    <MiddleSide>
                        <CardNome>Guilherme B Silva</CardNome>
                        <CardNumber>4812 ****</CardNumber>
                    </MiddleSide>
                    <RightSide>
                        <FontAwesome
                        name="chevron-right"
                        size={20}
                        />
                    </RightSide>
                </Card>


                <TituloCard style={{ marginTop: 30 }}>Cartões Virtuais</TituloCard>

                <Card>
                    <LeftSide>
                        <FontAwesome
                        name="credit-card"
                        size={30}
                        />
                    </LeftSide>
                    <MiddleSide>
                        <CardNome>Guilherme B Silva</CardNome>
                        <CardNumber>1237 ****</CardNumber>
                    </MiddleSide>
                    <RightSide>
                        <FontAwesome
                        name="chevron-right"
                        size={20}
                        />
                    </RightSide>
                </Card>

                <Card>
                    <LeftSide>
                        <FontAwesome
                        name="credit-card"
                        size={30}
                        />
                    </LeftSide>
                    <MiddleSide>
                        <CardNome>Guilherme B Silva</CardNome>
                        <CardNumber>4812 ****</CardNumber>
                    </MiddleSide>
                    <RightSide>
                        <FontAwesome
                        name="chevron-right"
                        size={20}
                        />
                    </RightSide>
                </Card>

                <Card>
                    <LeftSide>
                        <FontAwesome
                        name="credit-card"
                        size={30}
                        />
                    </LeftSide>
                    <MiddleSide>
                        <CardNome>Guilherme B Silva</CardNome>
                        <CardNumber>4812 ****</CardNumber>
                    </MiddleSide>
                    <RightSide>
                        <FontAwesome
                        name="chevron-right"
                        size={20}
                        />
                    </RightSide>
                </Card>

            </ScrollView>
        </Container>
    );
}