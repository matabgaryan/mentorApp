import { StyleSheet } from 'react-native';
import colors from '~configs/ui/colors';
import { fontSizes } from '~configs/ui/sizes';

export const inputStyles = StyleSheet.create({
    textAreaContainer: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.greyPrimary,
        marginVertical: 9,
        paddingLeft: 18,
        paddingTop: 20,
    },
    textArea: {
        height: 165,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        paddingRight: 18,
        color: colors.black,
        fontSize: fontSizes.size_regular,
    },
    textInput: {
        borderRadius: 6,
        marginVertical: 9,
        height: 44,
        borderWidth: 1,
        color: colors.black,
        justifyContent: 'center',
        fontSize: fontSizes.size_regular,
        paddingLeft: 18,
    },
    textInputValid: {
        borderColor: colors.greyPrimary,
    },
    textInputInValid: {
        borderColor: colors.danger,
    },
});
