import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from "./styles";
import {AppButtonProps} from "../../interfaces";

export const AppButton: React.FC<AppButtonProps> = ({
                    title,
                    onPress,
                    buttonColor,
                    titleColor,
                    buttonStyle,
                    textStyle,
                }) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.container,
                ...buttonStyle,
                backgroundColor: buttonColor || '#512DA8',
            }}
            onPress={onPress}>
            <Text
                style={{...styles.title, ...textStyle, color: titleColor || '#fff'}}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

