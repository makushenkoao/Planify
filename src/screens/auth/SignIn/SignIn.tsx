import { memo, useCallback, useState } from 'react';
import { Alert, SafeAreaView, Text } from 'react-native';
import { Button } from '../../../components/Button';
import { Title } from '../../../components/Title';
import { Input } from '../../../components/Input';
import { NavigationProp } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import styles from './styles';

interface SignInProps {
    navigation: NavigationProp<any>;
}

interface Values {
    email: string;
    password: string;
}

export const SignIn = memo((props: SignInProps) => {
    const { navigation } = props;
    const [values, setValues] = useState<Values>({} as Values);

    const onMoveToSignUp = useCallback(() => {
        navigation.navigate('Signup');
    }, [navigation]);

    const onChange = useCallback((value: string, key: string) => {
        setValues((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    }, []);

    const onSubmit = useCallback(() => {
        if (!values.email || !values.password) {
            Alert.alert('Fill in all the fields');
            return;
        }

        auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
                Alert.alert('Login Successful!');
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                } else {
                    Alert.alert(error.message);
                }

                console.error(error);
            });
    }, [values.email, values.password]);

    return (
        <SafeAreaView style={styles.container}>
            <Title>Welcome back!</Title>
            <Input
                onChangeText={(v) => onChange(v, 'email')}
                placeholder="Email"
                keyboardType="email-address"
            />
            <Input
                onChangeText={(v) => onChange(v, 'password')}
                placeholder="Password"
                secureTextEntry
            />
            <Button onPress={onSubmit}>Login</Button>
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
