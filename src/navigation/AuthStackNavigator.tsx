import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from "~screens/Auth/Login";
import Register from "~screens/Auth/Register";
import {MaterialUIIcon} from "~components/icons";
const Stack = createNativeStackNavigator();

const AuthStackNavigator = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{  headerShown: true }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerLeft: () => (
                        <MaterialUIIcon
                            onPress={() => navigation.goBack()}
                            name="arrow-back"
                        />
                    ),headerShown: true }}
            />
        </Stack.Navigator>
    );
};

export default AuthStackNavigator
