import React, {ReactElement, useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform, Text, View,} from 'react-native';
import styles from './styles/loginStyles';
import SafeScreen from '../../containers/SafeAreaView';
import {Divider} from 'react-native-elements';
import {useNavigationHook} from '~hooks/navigation/useNavigationHook';
import {FormField} from "~components/forms/FormField";
import {inputStyles} from "~components/forms/styles/inputStyles";
import routes from "~configs/routes";
import {AppButton} from "../../components/buttons/BaseButton/button";
import colors from "~configs/ui/colors";
import {AsyncStorageManager} from "~core/services/AsyncStorageManager";
import {StorageEnums} from "~core/enums";
import { useAppDispatch } from "~hooks/redux/useRedux";
import { IUser } from "~store/slices/interface";
import { setUser } from "~store/slices/auth";

export const Login = (): ReactElement => {
    const [storageValues, setStorageValues] = useState<IUser | null>(null)
    const {navigate} = useNavigationHook();
    const dispatch = useAppDispatch();
    const [error, setError] = useState(false);

    const navigateToCreateAccount = () => {
        navigate(routes.AUTH, {screen: routes.REGISTER});
    }

    const handleLogin = () => {
        if (storageValues){
            dispatch(setUser(storageValues));
        } else setError(true)
    }

    useEffect(() => {
        (async () => {
          const data = await AsyncStorageManager.getValueByKey(StorageEnums.AuthUser);
          if (data) setStorageValues(JSON.parse(data));
        })()
    },[])

    return (
        <SafeScreen>
            <KeyboardAvoidingView
                behavior={Platform.select({ios: 'padding'})}
                style={styles.container}>
                <View style={{alignItems: 'flex-start', marginBottom: 16}}>
                    <Text style={styles.headerText}>
                        Sign In With Your Email
                    </Text>
                </View>
                <View>
                    <FormField
                        editable={false}
                        value={storageValues ? storageValues?.email : ''}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={inputStyles.textInput}
                        placeholder="Email address"
                    />
                    <AppButton
                        onPress={() => handleLogin()}
                        buttonStyle={styles.button}
                        buttonColor={colors.black}
                        title="Sign In"
                    />
                    {
                        error && <Text style={{color: colors.danger}}>User does not exist</Text>
                    }
                </View>
                <View style={{marginBottom: 9, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Divider style={[styles.divider, {marginRight: 30}]}/>
                    <Text style={styles.dividerText}>or</Text>
                    <Divider style={[styles.divider, {marginLeft: 30}]}/>
                </View>
                <AppButton
                    onPress={() => navigateToCreateAccount()}
                    buttonStyle={styles.button}
                    titleColor={colors.black}
                    buttonColor={colors.white}
                    title="Create Account"
                />
            </KeyboardAvoidingView>
        </SafeScreen>
    )
}
