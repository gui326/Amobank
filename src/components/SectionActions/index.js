import React from "react";


import { View, Text, FlatList } from "react-native";

export default function SectionActions(){

    return(
        <View style={{flexDirection: 'row'}}>
            <FlatList horizontal={true}>

                <Text>Child 1</Text>
                <Text>Child 2</Text>
                <Text>Child 3</Text>

            </FlatList>
        </View>
    )
}