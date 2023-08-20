import { memo, useCallback } from 'react';
import { View } from 'react-native';
import { Button } from '../../../components/Button';
import styles from './styles';

export const SignIn = memo(() => {
    const onLogin = useCallback(() => {
        console.log('click onLogin');
    }, []);

    return (
        <View style={styles.container}>
            <Button onPress={onLogin}>Login</Button>
        </View>
    );
});
