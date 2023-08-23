import { memo, useCallback } from 'react';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Alert, Linking, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../constants';
import colors from '../../constants/colors';

export const DrawerContent = memo((props: DrawerContentComponentProps) => {
    const { navigation } = props;

    const logout = useCallback(() => {
        auth()
            .signOut()
            .then(() => Alert.alert('You are logged out'));
    }, []);

    const onLinkPress = useCallback(async (url: string) => {
        await Linking.openURL(url);
    }, []);

    return (
        <DrawerContentScrollView {...props}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={styles.link}
            >
                Home
            </Text>
            <Text
                onPress={() => navigation.navigate('Tasks')}
                style={styles.link}
            >
                Tasks
            </Text>
            <Text
                onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}
                style={styles.link}
            >
                Privacy Policy
            </Text>
            <Text
                onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}
                style={styles.link}
            >
                Terms and Conditions
            </Text>
            <Text
                onPress={logout}
                style={styles.link}
            >
                Log out
            </Text>
        </DrawerContentScrollView>
    );
});

const styles = StyleSheet.create({
    link: {
        color: colors.black,
        fontWeight: '500',
        fontSize: 16,
        margin: 8,
        marginHorizontal: 16,
    },
});
