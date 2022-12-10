import { StyleSheet } from 'react-native';
import colors from '../../../configs/ui/colors';
import {fontSizes} from "~configs/ui/sizes";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    header: {
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    content:{
        alignItems:"center",
        marginBottom: 20,
    },
    title:{
        fontWeight: "bold",
        fontSize: fontSizes.size_l,
        marginBottom: 12
    },
    description: {
        fontSize: fontSizes.size_s,
        textAlign: "center"
    },
});
