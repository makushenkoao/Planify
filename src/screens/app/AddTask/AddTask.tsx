import styles from './styles';
import { Image, Pressable, SafeAreaView } from 'react-native';
import { memo, useCallback } from 'react';
import { NavigationProp } from '@react-navigation/native';

interface AddTaskProps {
    navigation: NavigationProp<any>;
}
export const AddTask = memo((props: AddTaskProps) => {
    const { navigation } = props;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                onPress={onBack}
                style={styles.backContainer}
                hitSlop={8}
            >
                <Image
                    style={styles.backIcon}
                    source={require('../../../assets/images/back.png')}
                />
            </Pressable>
        </SafeAreaView>
    );
});
