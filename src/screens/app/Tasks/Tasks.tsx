import styles from './styles';
import { SafeAreaView, ScrollView } from 'react-native';
import { memo } from 'react';
import { Header } from '../../../components/Header';
import { PlusIcon } from '../../../components/PlusIcon';
import { Title } from '../../../components/Title';
export const Tasks = memo(() => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Tasks" />
            <ScrollView>
                <Title variant="secondary">To Do Tasks:</Title>
            </ScrollView>
            <PlusIcon />
        </SafeAreaView>
    );
});
