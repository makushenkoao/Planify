import styles from './styles';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { memo } from 'react';
import { Header } from '../../../components/Header';
import { PlusIcon } from '../../../components/PlusIcon';

export const Home = memo(() => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Home" />
            <ScrollView>
                <Text>Home</Text>
            </ScrollView>
            <PlusIcon />
        </SafeAreaView>
    );
});
