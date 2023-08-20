import { memo } from 'react';
import { Pressable, View } from 'react-native';
import styles from './styles';

interface CheckboxProps {
    onPress?: () => void;
    checked?: boolean;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const { onPress, checked } = props;

    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, checked ? styles.checkedBox : {}]}
        >
            {checked ? <View style={styles.innerSquare} /> : null}
        </Pressable>
    );
});
