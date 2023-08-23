import { memo, useCallback } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';

interface HeaderProps {
    title?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { title } = props;
    const navigation = useNavigation();

    const onOpenDrawer = useCallback(() => {
        navigation.dispatch(DrawerActions.openDrawer());
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onOpenDrawer}
                hitSlop={8}
            >
                <Image
                    style={styles.icon}
                    source={require('../../assets/images/menu.png')}
                />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.icon} />
        </View>
    );
});
