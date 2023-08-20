import { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import { OnBoarding } from './src/screens/auth/onBoarding';
import { SignIn } from './src/screens/auth/SignIn';
import { SignUp } from './src/screens/auth/SignUp';

const Stack = createStackNavigator();

function App() {
    // const isDarkMode = useColorScheme() === 'dark';
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    );
}

export default memo(App);
