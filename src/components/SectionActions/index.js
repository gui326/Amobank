import React from "react";
import { CardArea, Card, Titulo } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

export default function SectionActions(){
    const navigation = useNavigation();

    return(
        <View>
            <CardArea>
                <ScrollView
                showsHorizontalScrollIndicator={false} 
                horizontal>
                    <Card>
                        <Titulo>Depositar</Titulo>
                    </Card>
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
                        <Titulo>Transferencia</Titulo>
                    </Card>
                </ScrollView>
            </CardArea>
        </View>
    )
}