import { memo, useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes/Routes';
import { Alert, Text } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

function App() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    const onAuthStateChanged = useCallback(
        (new_user: FirebaseAuthTypes.User | null) => {
            setUser(new_user);
            if (initializing) {
                setInitializing(false);
            }
        },
        [initializing],
    );

    const logout = useCallback(() => {
        auth()
            .signOut()
            .then(() => Alert.alert('You are logged out'));
    }, []);

    useEffect(() => {
        return auth().onAuthStateChanged(onAuthStateChanged);
    }, [onAuthStateChanged]);

    if (initializing) {
        return null;
    }

    if (user) {
        return (
            <>
                <Text style={{ marginTop: 40 }}>Welcome, {user.email}!</Text>
                <Text onPress={logout}>Log out</Text>
            </>
        );
    }

    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}

export default memo(App);
