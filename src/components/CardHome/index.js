import React from "react";
import { TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { LeftSide, RightSide, Container, Titulo, Side, Valor, Entrelinhas, Subtitulo } from "./styled";
import { useNavigation } from "@react-navigation/native";

export default function CardHome(props){
    const navigation = useNavigation();

    function navegar(){
        if(props.navegar){
            navigation.navigate(props.navegar)
        } else {
            alert('ainda não foi feito');
        }
    }

    return(
        <TouchableOpacity
            style={{flex: 1}}
            onPress={() => navegar()}
        >
            <Container>
                <FontAwesome
                    name={props.icone}
                    size={28}
                />
                <Side>
                    <LeftSide>
                        <Titulo>{props.titulo}</Titulo>
                    </LeftSide>
                    <RightSide>
                        <FontAwesome
                            name="arrow-right"
                            size={25}
                        />
                    </RightSide>
                </Side>
                <Subtitulo>{props.subtitulo}</Subtitulo>
                <Valor>R$ {props.valor}</Valor>
                <Entrelinhas>{props.entrelinhas}</Entrelinhas>
            </Container>
        </TouchableOpacity>
    );
}