import { Platform, StyleSheet } from 'react-native';
import colors from '~configs/ui/colors';
import { fontSizes } from '~configs/ui/sizes';

const styles = StyleSheet.create({
    container: {
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
        backgroundColor: colors.white,
        alignContent: 'center',
        marginBottom: 'auto',
        ...Platform.select({
            ios: {
                paddingTop: 100,
            },
            android: {
                paddingTop: 80,
            },
        }),
    },
    headerText: {
        fontSize: fontSizes.size_xl,
        fontWeight: "bold",
        textAlign: 'left',
        marginBottom: 7,
    },

    buttonContainer: {
        width: '100%',
        paddingTop: 23,
        paddingHorizontal: 6,
    },
    button: {
        width: '100%',
        height: 44,
        borderRadius: 6,
        marginTop: 9,
        marginBottom: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        width: '40%',
        backgroundColor: colors.greyBorder,
        height: 0.5,
        opacity: 0.7,
    },
    dividerText: {
        color: colors.darkGrey,
        fontSize: fontSizes.size_xs,
        fontWeight: "300",
    }
});

export default styles
