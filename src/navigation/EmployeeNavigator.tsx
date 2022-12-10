import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contact from '../screens/Employees'
const Stack = createNativeStackNavigator();

const EmployeeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Contact"
                component={Contact}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default EmployeeStackNavigator
