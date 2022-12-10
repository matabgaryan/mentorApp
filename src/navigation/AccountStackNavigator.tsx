import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AccountScreen} from "~screens/Account/Account";
import {useAccount} from "~hooks/account/useAccount";
import AuthStackNavigator from "~navigation/AuthStackNavigator";
import {ManageGroups} from "~screens/Account/ManageGroups";
const Stack = createNativeStackNavigator();

const AccountStackNavigator = () => {
    const { isAuthenticated } = useAccount();
    return (
        <Stack.Navigator>
            {
                isAuthenticated ?
                    <>
                        <Stack.Screen
                            name="Account"
                            component={AccountScreen}
                            options={{headerShown: true}}
                        />
                        <Stack.Screen
                            name="ManageGroups"
                            component={ManageGroups}
                            options={{headerShown: true}}
                        />
                    </>
                :
                <Stack.Screen
                name="Auth"
                component={AuthStackNavigator}
                options={{headerShown: false}}
                />
            }
        </Stack.Navigator>
    );
};

export default AccountStackNavigator
