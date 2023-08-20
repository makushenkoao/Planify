import { memo, useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import { Button } from '../../../components/Button';
import { NavigationProp } from '@react-navigation/native';
import styles from './styles';

interface OnBoardingProps {
    navigation: NavigationProp<any>;
}

export const OnBoarding = memo((props: OnBoardingProps) => {
    const { navigation } = props;

    const onLogin = useCallback(() => {
        navigation.navigate('Signin');
    }, [navigation]);

    const onGetStarted = useCallback(() => {
        navigation.navigate('Signup');
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/onboarding.png')}
                />
                <View style={styles.footer} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Best task management app</Text>
                <Text style={styles.subtitle}>
                    Get organized by sorting out all your tasks and boost your
                    productivity
                </Text>
                <Button onPress={onLogin}>Log in</Button>
                <Button
                    variant="secondary"
                    onPress={onGetStarted}
                >
                    Get started
                </Button>
            </View>
        </View>
    );
});
