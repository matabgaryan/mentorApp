import React from "react";
import { Icon } from "react-native-elements"
import {MaterialUiIconProps} from "~components/interfaces";

export const MaterialUIIcon: React.FC<MaterialUiIconProps> = ({name, onPress, size = 26}) => {
    return <Icon  size={size} onPress={onPress} name={name} tvParallaxProperties={undefined} />

}
