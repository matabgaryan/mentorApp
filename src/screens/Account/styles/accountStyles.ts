import { StyleSheet } from 'react-native';
import colors from '~configs/ui/colors';
import { fontSizes } from '~configs/ui/sizes';

const styles = StyleSheet.create({
    profileMainWrapper: {
        backgroundColor: colors.white,
    },
    actionsWrapper:{
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    topBlackBorder: {
        position: 'relative',
        height: 64,
        backgroundColor: colors.black,
        marginBottom: 44,
    },
    profileContent: {
        flex: 1,
        zIndex: -1,
        flexDirection: "column",
        paddingLeft: 12,
        paddingRight: 12
    },
    profileImageWrapper: {
        position: 'absolute',
        top: 18,
        left: 12,
        zIndex: 1
    },
    profileImage: {
        borderWidth: 3,
        borderColor: colors.white,
        height: 86,
        width: 86,
        borderRadius: 50,
        zIndex: 1
    },
    fullName: {
        fontSize: fontSizes.size_l,
        fontWeight: "600"
    },
    userName: {
        fontSize: fontSizes.size_regular,
        color: colors.darkGrey,
        paddingTop: 5,
        paddingBottom: 12,
    },
    accountAttributeName: {
        marginBottom: 4,
        fontSize: fontSizes.size_s,
        color: colors.black,
        fontWeight: "400"
    },
    accountAttributeValue: {
        fontSize: fontSizes.size_s,
        padding: 16,
        borderRadius:6,
        borderColor: colors.lightGrey,
        borderWidth: 1
    }
});

export default styles
