import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/loginStyles';
import {inputStyles} from "~components/forms/styles/inputStyles";
import {FormField} from "~components/forms/FormField";
import AppButton from "~components/buttons/BaseButton";
import colors from "~configs/ui/colors";
import {fontSizes} from "~configs/ui/sizes";



export const RegisterStepTwo = ( props ) => {
    const { onChange, changeStep } = props;
    return(
        <>
            <View style={{alignItems: 'flex-start', marginBottom: 10}}>
                <Text style={styles.headerText}>
                    You already done
                </Text>
                <Text style={{fontWeight: "normal", fontSize: fontSizes.size_regular, color: colors.darkGrey}}>
                    Fil you info for the best match
                </Text>
            </View>
            <FormField
                onChangeText={(value) => onChange(value, 'department')}
                autoCorrect={false}
                placeholder="Department"
                returnKeyType="done"
                placeholderTextColor={colors.darkGrey}
                style={[inputStyles.textInput, inputStyles.textInputValid]}
            />
            <FormField
                autoCorrect={false}
                onChangeText={(value) => onChange(value, 'jobTitle')}
                placeholder="Job Title"
                returnKeyType="done"
                placeholderTextColor={ colors.darkGrey}
                style={[inputStyles.textInput, inputStyles.textInputValid]}
            />
            <View style={inputStyles.textAreaContainer}>
                <FormField
                    maxLength={250}
                    onChangeText={(value) => onChange(value, 'description')}
                    multiline={true}
                    autoCorrect={false}
                    style={inputStyles.textArea}
                    numberOfLines={6}
                    returnKeyType="done"
                    placeholder="Bio"
                />
            </View>
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
