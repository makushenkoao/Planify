import { memo, useCallback, useState } from 'react';
import { Button } from '../../../components/Button';
import styles from './styles';
import { Linking, SafeAreaView, Text, View } from 'react-native';
import { Title } from '../../../components/Title';
import { Input } from '../../../components/Input';
import { NavigationProp } from '@react-navigation/native';
import { Checkbox } from '../../../components/Checkbox';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../../constants';

interface SignUpProps {
    navigation: NavigationProp<any>;
}

export const SignUp = memo((props: SignUpProps) => {
    const { navigation } = props;
    const [checked, setChecked] = useState<boolean>(false);

    const onSignUp = useCallback(() => {
        console.log('click onLogin');
    }, []);

    const onMoveToSignIn = useCallback(() => {
        navigation.navigate('Signin');
    }, [navigation]);

    const onCheckboxPress = useCallback(() => {
        setChecked((prev) => !prev);
    }, []);

    const onLinkPress = useCallback((url: string) => {
        Linking.openURL(url);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Title>Joib the hunb!</Title>
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
            <Input placeholder="Email name" />
            <Input placeholder="Password name" />
            <Input placeholder="Confirm password name" />
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
                onPress={onSignUp}
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
        </SafeAreaView>
    );
});
