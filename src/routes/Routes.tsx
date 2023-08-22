import { OnBoarding } from '../screens/auth/onBoarding';
import { SignIn } from '../screens/auth/SignIn';
import { SignUp } from '../screens/auth/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { memo } from 'react';

const Stack = createStackNavigator();

export const Routes = memo(() => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Onboarding"
                component={OnBoarding}
            />
            <Stack.Screen
                name="Signin"
                component={SignIn}
            />
            <Stack.Screen
                name="Signup"
                component={SignUp}
            />
        </Stack.Navigator>
    );
});
