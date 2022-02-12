import React from "react";
import { HeaderArea, Logo } from "./styled";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Text } from "react-native";

export default function Header(){
    return(
        <HeaderArea>
            <FontAwesome
            name="user-circle"
            size={40}
            color={'#000000'}
            />

            <Logo>Amobank</Logo>

            <FontAwesome
            name="gear"
            size={40}
            color={'#000000'}
            />
        </HeaderArea>
    );
}