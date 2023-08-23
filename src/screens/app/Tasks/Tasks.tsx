import styles from './styles';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { memo } from 'react';
import { Header } from '../../../components/Header';
import { PlusIcon } from '../../../components/PlusIcon';
export const Tasks = memo(() => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Tasks" />
            <ScrollView>
                <Text>Tasks</Text>
            </ScrollView>
            <PlusIcon />
        </SafeAreaView>
    );
});
