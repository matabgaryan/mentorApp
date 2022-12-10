import React from "react";
import {View} from "react-native";
import Logo from "~assets/images/logo.svg";
import styles from "./styles/headerStyles";

export const DefaultScreenHeader: React.FC = () => {
    return(
        <View style={styles.header}>
            <View style={styles.headerTopContent}>
                    <Logo width={120}/>
            </View>
        </View>
    )
}
