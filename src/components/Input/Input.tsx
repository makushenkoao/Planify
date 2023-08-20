import { TextInput, TextInputProps } from 'react-native';
import { memo } from 'react';
import styles from './styles';
import colors from '../../constants/colors';

export const Input = memo((props: TextInputProps) => {
    return (
        <TextInput
            style={styles.input}
            placeholderTextColor={colors.midGrey}
            {...props}
        />
    );
});
