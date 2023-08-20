import { memo, useCallback } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from '../../../components/Button';
import styles from './styles';
import { Title } from '../../../components/Title';
import { Input } from '../../../components/Input';

export const SignIn = memo(() => {
    const onLogin = useCallback(() => {
        console.log('click onLogin');
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Title>Welcome back!</Title>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button onPress={onLogin}>Login</Button>
            <Text style={styles.footerText}>
                Not Registered?
                <Text style={styles.footerLink}> Sign up!</Text>
            </Text>
        </SafeAreaView>
    );
});
