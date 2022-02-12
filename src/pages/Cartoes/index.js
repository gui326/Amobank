import React from "react";
import { Image, Text } from "react-native";
import { Container, Background, Card, LeftSide, RightSide, MiddleSide, CardNome, CardNumber } from "./styled";

import HeaderInterno from "../../components/HeaderInterno";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";

export default function Cartoes(){
    return(
        <Container>
            <HeaderInterno/>

            <ScrollView
            showsVerticalScrollIndicator={false}
            >

                <Background>
                    <Image
                    source={require('../../assets/images/backgroundCard.png')}
                    />
                </Background>

                <Text>Cartões Físicos</Text>

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
                        size={30}
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
                        size={30}
                        />
                    </RightSide>
                </Card>


                <Text style={{ marginTop: 30 }}>Cartões Virtuais</Text>

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
                        size={30}
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
                        size={30}
                        />
                    </RightSide>
                </Card>

            </ScrollView>
        </Container>
    );
}