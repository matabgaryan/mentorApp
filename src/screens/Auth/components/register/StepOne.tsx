import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/loginStyles';
import {inputStyles} from "~components/forms/styles/inputStyles";
import {FormField} from "~components/forms/FormField";
import AppButton from "~components/buttons/BaseButton";
import colors from "~configs/ui/colors";
import ImagePickerButton from "~components/imagePicker";
import {fontSizes} from "~configs/ui/sizes";

export const RegisterStepOne = ( props ) => {
    const { changeStep, onChange } = props;

    return(
        <>
            <View style={{alignItems: 'flex-start', marginBottom: 10}}>
                <Text style={styles.headerText}>
                    Create your MentorMe account
                </Text>
                <Text style={{fontWeight: "normal", fontSize: fontSizes.size_regular, color: colors.darkGrey}}>
                    It’s quick and easy
                </Text>
            </View>
            <ImagePickerButton handleGetPhotoURI={(value) => onChange(value.uri, 'image')} />
            <FormField
                autoCorrect={false}
                onChangeText={(value) => onChange(value, 'firstName')}
                placeholder="First name *"
                returnKeyType="done"
                placeholderTextColor={colors.darkGrey}
                style={[inputStyles.textInput, inputStyles.textInputValid]}
            />
            <FormField
                autoCorrect={false}
                onChangeText={(value) => onChange(value, 'lastName')}
                placeholder="Last Name *"
                returnKeyType="done"
                placeholderTextColor={ colors.darkGrey}
                style={[inputStyles.textInput, inputStyles.textInputValid]}
            />
            <FormField
                autoCorrect={false}
                onChangeText={(value) => onChange(value, 'email')}
                returnKeyType="done"
                placeholder="Email"
                autoCapitalize="none"
                style={[inputStyles.textInput, inputStyles.textInputValid]}
            />
            <FormField
                autoCorrect={false}
                onChangeText={(value) => onChange(value, 'location')}
                returnKeyType="done"
                placeholder="Location"
                autoCapitalize="none"
                style={[inputStyles.textInput, inputStyles.textInputValid]}
            />
            <View style={styles.buttonContainer}>
                        <AppButton buttonStyle={styles.button}
                                buttonColor={'black'}
                                onPress={changeStep}
                                title="Next"
                        />
            </View>
        </>
    )
};
