import { Text, TouchableOpacity } from 'react-native';
import { memo, ReactNode } from 'react';
import styles from './styles';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
    children: ReactNode;
    onPress: () => void;
    variant?: ButtonVariant;
}

export const Button = memo((props: ButtonProps) => {
    const { children, onPress, variant = 'primary' } = props;
    return (
        <TouchableOpacity
            style={[styles.container, styles[variant]]}
            onPress={onPress}
        >
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
});
