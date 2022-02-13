import React from "react";
import { HeaderArea, Logo } from "./styled";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Text } from "react-native";

export default function Header(){
    return(
        <HeaderArea>
            <FontAwesome
            name="user-circle"
            size={35}
            />

            <FontAwesome
            name="gear"
            size={35}
            />
        </HeaderArea>
    );
}