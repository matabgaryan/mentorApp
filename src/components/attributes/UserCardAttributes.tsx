import {Text, View} from "react-native";
import React from "react";

export const UserCardAttribute = ({name, value}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{fontWeight: "bold", fontSize: 14, marginRight: 10}}>{name}</Text>
            <Text numberOfLines={1} style={{maxWidth: 100,fontWeight: "normal", fontSize: 14, marginRight: 10}}>{value}</Text>
        </View>
    )
}
