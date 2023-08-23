import { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';
import getStyles from './styles';

interface StatusCardProps {
    label: string;
    count: number;
    type?: 'error';
}

export const StatusCard = memo((props: StatusCardProps) => {
    const { label, count, type } = props;
    const navigation = useNavigation();
    const styles = getStyles(type);

    const onPress = useCallback(() => {
        navigation.navigate('Tasks' as never);
    }, [navigation]);

    return (
        <Pressable
            onPress={onPress}
            hitSlop={8}
            style={styles.container}
        >
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.count}>{count}</Text>
        </Pressable>
    );
});
