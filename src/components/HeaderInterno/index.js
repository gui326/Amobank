import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderArea, Titulo } from "./styled";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";

export default function HeaderInterno(props){
    const navigation = useNavigation();

    return(
        <HeaderArea>
            <TouchableOpacity style={{ width: 50, height: 33 }}
                onPress={() => navigation.goBack()}
            >
                <Feather
                name="x"
                size={33}
                />
            </TouchableOpacity>
            <Titulo>{props.titulo}</Titulo>
        </HeaderArea>
    );
}