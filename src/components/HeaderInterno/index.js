import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderArea, Titulo } from "./styled";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

export default function HeaderInterno(){
    const navigation = useNavigation();

    return(
        <HeaderArea>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <FontAwesome
                name="close"
                size={40}
                />
            </TouchableOpacity>
            <Titulo>Meus Cartões</Titulo>
        </HeaderArea>
    );
}