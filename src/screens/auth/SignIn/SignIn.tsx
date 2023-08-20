import { memo, useCallback } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from '../../../components/Button';
import styles from './styles';
import { Title } from '../../../components/Title';
import { Input } from '../../../components/Input';
import { NavigationProp } from '@react-navigation/native';

interface SignInProps {
    navigation: NavigationProp<any>;
}

export const SignIn = memo((props: SignInProps) => {
    const { navigation } = props;
    const onLogin = useCallback(() => {
        console.log('click onLogin');
    }, []);

    const onMoveToSignUp = useCallback(() => {
        navigation.navigate('Signup');
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <Title>Welcome back!</Title>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button onPress={onLogin}>Login</Button>
            <Text style={styles.footerText}>
                Not registered?
                <Text
                    onPress={onMoveToSignUp}
                    style={styles.footerLink}
                >
                    {' '}
                    Sign up!
                </Text>
            </Text>
        </SafeAreaView>
    );
});
