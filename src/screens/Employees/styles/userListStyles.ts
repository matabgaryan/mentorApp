import {StyleSheet} from "react-native";
import colors from "~configs/ui/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        margin:10,
        borderWidth: 1,
        backgroundColor: colors.white,
        borderColor: colors.greyBackground,
        shadowColor: colors.greyBackground,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    userImage: {
        height: 64,
        width: 64,
        borderRadius: 32,
        borderColor: colors.greyBorder,
        borderWidth: 1,
        shadowColor: '#00000029',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    userName: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    userInfoWrapper: {
        marginLeft: 10
    }
})
