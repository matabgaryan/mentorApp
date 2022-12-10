import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "~navigation/HomeStackNavigator";
import EmployeeStackNavigator from "~navigation/EmployeeNavigator";
import colors from "~configs/ui/colors";
import { MaterialUIIcon } from "~components/icons";
import AccountStackNavigator from "~navigation/AccountStackNavigator";
const Tab = createBottomTabNavigator();

const tabScreenOptions = (iconName: string) => {
    return {
        tabBarActiveBackgroundColor: colors.greyBackground,
        tabBarShowLabel: false,

        headerShown: true,
        tabBarIcon: () => <MaterialUIIcon name={iconName}/>
    }
}

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    options={tabScreenOptions('home')}
                    name="HomeStack"
                    component={HomeStackNavigator}
                />
                <Tab.Screen
                    options={tabScreenOptions('work')}
                    name="Employees"
                    component={EmployeeStackNavigator} />
                <Tab.Screen
                    options={{
                        tabBarActiveBackgroundColor: colors.greyBackground,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: () => <MaterialUIIcon name="account-circle"/>
                    }}
                    name="AccountStack"
                    component={AccountStackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>

    );
};

export default MainNavigator
