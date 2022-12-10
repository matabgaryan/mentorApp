import { StyleSheet } from 'react-native';
import {fontSizes} from "~configs/ui/sizes";
import colors from "~configs/ui/colors";

export const mentorsStyles = StyleSheet.create({
    userItem: {
        justifyContent: 'space-between',
        paddingBottom: 18,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
    },
    mentorCardItem: {
        alignItems: 'center',
        marginRight: 12
    },
    mentorUserImageAndBadgeWrapper: {
        position: 'relative',
    },
    mentorUserName: {
        fontSize: fontSizes.size_xs,
        color: colors.black,
        paddingTop: 5,
    },
    itemImage:{
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
})
