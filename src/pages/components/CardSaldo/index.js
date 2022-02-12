import React, { useState } from "react";
import { Card, LeftSide, RightSide, TextSaldo, TextValue } from "./styled";

import Feather from "react-native-vector-icons/Feather";

export default function CardSaldo(){
    const [visivel, setVisivel] = useState(true);

    return(
        <Card style={{
            elevation: 7,
            shadowColor: '#000000',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            }}>
            <LeftSide>
                <TextSaldo>Saldo</TextSaldo>
                <TextValue>{visivel? 'R$ 1.523,00' : 'nada'}</TextValue>
            </LeftSide>
            <RightSide>
                <Feather
                onPress={ () => setVisivel(!visivel)}
                name={visivel ? 'eye' : 'eye-off'}
                size={40}
                />
            </RightSide>
        </Card>
    );
}