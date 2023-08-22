import { memo, useCallback, useState } from 'react';
import { Button } from '../../../components/Button';
import styles from './styles';
import {
    Alert,
    Linking,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { Title } from '../../../components/Title';
import { Input } from '../../../components/Input';
import { NavigationProp } from '@react-navigation/native';
import { Checkbox } from '../../../components/Checkbox';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../../constants';
import auth from '@react-native-firebase/auth';

interface SignUpProps {
    navigation: NavigationProp<any>;
}

interface Values {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
}

export const SignUp = memo((props: SignUpProps) => {
    const { navigation } = props;
    const [checked, setChecked] = useState<boolean>(false);
    const [values, setValues] = useState<Values>({} as Values);

    const onMoveToSignIn = useCallback(() => {
        navigation.navigate('Signin');
    }, [navigation]);

    const onCheckboxPress = useCallback(() => {
        setChecked((prev) => !prev);
    }, []);

    const onLinkPress = useCallback(async (url: string) => {
        await Linking.openURL(url);
    }, []);

    const onChange = useCallback((value: string, key: string) => {
        setValues((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    }, []);

    const onSubmit = useCallback(() => {
        if (values.password !== values.confirm_password) {
            Alert.alert('passwords do not match');
            return;
        }

        if (
            !values.email ||
            !values.first_name ||
            !values.last_name ||
            !values.password ||
            !values.confirm_password
        ) {
            Alert.alert('Fill in all the fields');
            return;
        }

        if (!checked) {
            Alert.alert(
                'Need addons with terms, conditions and privacy policy!',
            );
            return;
        }

        auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
                auth().currentUser?.updateProfile({
                    displayName: `${values.first_name} ${values.last_name}`,
                });
                Alert.alert('Account created successfully!');
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                }

                console.error(error);
            });
    }, [
        checked,
        values.confirm_password,
        values.email,
        values.first_name,
        values.last_name,
        values.password,
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Join the hub!</Title>
                <Input
                    onChangeText={(v) => onChange(v, 'first_name')}
                    placeholder="First name"
                />
                <Input
                    onChangeText={(v) => onChange(v, 'last_name')}
                    placeholder="Last name"
                />
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
                <Input
                    onChangeText={(v) => onChange(v, 'confirm_password')}
                    placeholder="Confirm password"
                    secureTextEntry
                />
                <View style={styles.row}>
                    <Checkbox
                        checked={checked}
                        onPress={onCheckboxPress}
                    />
                    <Text style={styles.agreeText}>
                        I agree to
                        <Text
                            onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}
                            style={styles.agreeLink}
                        >
                            {' '}
                            Terms and conditions
                        </Text>{' '}
                        and
                        <Text
                            onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}
                            style={styles.agreeLink}
                        >
                            {' '}
                            Privacy Policy
                        </Text>
                    </Text>
                </View>
                <Button
                    variant="secondary"
                    onPress={onSubmit}
                >
                    Create new account
                </Button>
                <Text style={styles.footerText}>
                    Already registered?
                    <Text
                        onPress={onMoveToSignIn}
                        style={styles.footerLink}
                    >
                        {' '}
                        Sign in!
                    </Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
});
