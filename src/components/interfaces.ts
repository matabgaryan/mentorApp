import {Pojo} from "~core/types";

export interface AppButtonProps {
    title: string,
    onPress: () => void,
    buttonColor: string,
    titleColor?: string,
    buttonStyle?: Pojo,
    textStyle?: Pojo,
}

export interface MaterialUiIconProps{
    name: string,
    onPress?: () => void,
    style?: Pojo,
    size?: number
}
