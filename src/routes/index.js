import React from 'react';   
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Cartoes from '../pages/Cartoes';
import Fatura from '../pages/Fatura';

export default function Routes(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Login" component={Login} />

            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="Cartoes" component={Cartoes} />

            <Stack.Screen name="Fatura" component={Fatura} />
        </Stack.Navigator>
    );
}