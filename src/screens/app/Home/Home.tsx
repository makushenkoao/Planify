import styles from './styles';
import { SafeAreaView, ScrollView } from 'react-native';
import { memo } from 'react';
import { Header } from '../../../components/Header';
import { PlusIcon } from '../../../components/PlusIcon';
import { Title } from '../../../components/Title';

export const Home = memo(() => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Home" />
            <ScrollView>
                <Title variant="secondary">Daily Tasks:</Title>
            </ScrollView>
            <PlusIcon />
        </SafeAreaView>
    );
});
