import { OnBoarding } from '../screens/auth/onBoarding';
import { SignIn } from '../screens/auth/SignIn';
import { SignUp } from '../screens/auth/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { memo, useCallback, useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/app/Home';
import { Tasks } from '../screens/app/Tasks';
import { AddTask } from '../screens/app/AddTask';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Image, StyleSheet } from 'react-native';
import { DrawerContent } from '../components/DrawerContent';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getUserData, setUser } from '../store/user';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator
        screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        style={styles.icon}
                        source={
                            focused
                                ? require('../assets/images/home_active.png')
                                : require('../assets/images/home_inactive.png')
                        }
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Tasks"
            component={Tasks}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        style={styles.icon}
                        source={
                            focused
                                ? require('../assets/images/calendar_active.png')
                                : require('../assets/images/calendar_inactive.png')
                        }
                    />
                ),
            }}
        />
    </Tab.Navigator>
);

export const Routes = memo(() => {
    const [initializing, setInitializing] = useState(true);
    const dispatch = useAppDispatch();
    const user = useAppSelector(getUserData);

    const onAuthStateChanged = useCallback(
        (new_user: FirebaseAuthTypes.User | null) => {
            dispatch(setUser(new_user));
            if (initializing) {
                setInitializing(false);
            }
        },
        [dispatch, initializing],
    );

    useEffect(() => {
        return auth().onAuthStateChanged(onAuthStateChanged);
    }, [onAuthStateChanged]);

    if (initializing) {
        return null;
    }

    if (user) {
        return (
            <Drawer.Navigator
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="Tabs"
                    component={Tabs}
                />
                <Drawer.Screen
                    name="AddTask"
                    component={AddTask}
                />
            </Drawer.Navigator>
        );
    }

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

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
