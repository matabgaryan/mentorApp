import React from 'react';
import { View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from "./styles";
import {LayoutProps} from "../interfaces";

export const SafeScreen: (props: LayoutProps) => JSX.Element = ({children, style}) => {
    return (
        <SafeAreaView edges={['right', 'left']} testID="safeScreen" style={[styles.screen, style]}>
            <View style={[styles.view]}>{children}</View>
        </SafeAreaView>
    );
}
