import { memo, useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import { Button } from '../../../components/Button';

export const OnBoarding = memo(() => {
    const onLogin = useCallback(() => {
        console.log('click onLogin');
    }, []);

    const onGetStarted = useCallback(() => {
        console.log('click onGetStarted');
    }, []);

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
