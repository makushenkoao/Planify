import { TextInput, TextInputProps } from 'react-native';
import { memo } from 'react';
import styles from './styles';
import colors from '../../constants/colors';

type InputVariant = 'default' | 'outlined';

interface InputProps extends TextInputProps {
    variant?: InputVariant;
}

export const Input = memo((props: InputProps) => {
    const { variant = 'default' } = props;
    return (
        <TextInput
            style={[styles.input, styles[variant]]}
            placeholderTextColor={colors.midGrey}
            {...props}
        />
    );
});
