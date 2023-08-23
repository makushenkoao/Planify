import { Text, TouchableOpacity } from 'react-native';
import { memo, ReactNode } from 'react';
import styles from './styles';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
    children: ReactNode;
    onPress: () => void;
    variant?: ButtonVariant;
    style: any;
}

export const Button = memo((props: ButtonProps) => {
    const { children, onPress, variant = 'primary', style } = props;
    return (
        <TouchableOpacity
            style={[styles.container, styles[variant], style]}
            onPress={onPress}
        >
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
});
