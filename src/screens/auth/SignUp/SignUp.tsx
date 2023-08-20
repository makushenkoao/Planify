import { memo, useCallback } from 'react';
import { View } from 'react-native';
import { Button } from '../../../components/Button';
import styles from './styles';

export const SignUp = memo(() => {
    const onSignUp = useCallback(() => {
        console.log('click onLogin');
    }, []);

    return (
        <View style={styles.container}>
            <Button onPress={onSignUp}>Create new account</Button>
        </View>
    );
});
