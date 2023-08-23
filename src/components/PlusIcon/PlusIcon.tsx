import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';
import styles from './styles';

export const PlusIcon = memo(() => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('AddTask');
    };

    return (
        <Pressable
            onPress={onPress}
            hitSlop={8}
            style={styles.container}
        >
            <Text style={styles.plus}>+</Text>
        </Pressable>
    );
});
