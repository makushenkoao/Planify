import styles from './styles';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { memo, useEffect, useState } from 'react';
import { Header } from '../../../components/Header';
import { PlusIcon } from '../../../components/PlusIcon';
import { Title } from '../../../components/Title';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getUserData } from '../../../store/user';
import { ITask } from '../../../types/task';
import { setTasks } from '../../../store/tasks';
import { StatusCard } from '../../../components/StatusCard';
import { NavigationProp } from '@react-navigation/native';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';

interface HomeProps {
    navigation: NavigationProp<any>;
}

interface Counts {
    highPriority: number;
    dueDeadline: number;
    quickWin: number;
}

export const Home = memo((props: HomeProps) => {
    const { navigation } = props;
    const tasks = useAppSelector((state) => state.tasks.data);
    const user = useAppSelector(getUserData);
    const dispatch = useAppDispatch();
    const toUpdate = useAppSelector((state) => state.tasks.toUpdate);
    const [counts, setCounts] = useState<Counts>({} as Counts);

    useEffect(() => {
        firestore()
            .collection('Tasks')
            .where('userId', '==', user?.uid)
            .get()
            .then((querySnapshot) => {
                const tasksList: ITask[] = [];

                querySnapshot.forEach((documentSnapshot) => {
                    tasksList.push({
                        uid: documentSnapshot.id,
                        ...((documentSnapshot.data() as ITask) || {}),
                    });
                });

                dispatch(setTasks(tasksList));
            });
    }, [user, toUpdate, dispatch]);

    useEffect(() => {
        if (tasks?.length) {
            const highPriority = tasks?.filter(
                (task) =>
                    task?.category === 'urgent' ||
                    task?.category === 'important',
            );
            const today = moment(new Date()).format('YYYY-MM-DD');
            const dueDeadline = tasks?.filter((task) => {
                const deadline = task?.deadline?.seconds * 1000;
                const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
                return moment(deadlineFormatted).isBefore(today);
            });
            const quickWin = tasks?.filter(
                (task) => task?.category === 'quick_task',
            );

            setCounts({
                highPriority: highPriority?.length,
                dueDeadline: dueDeadline?.length,
                quickWin: quickWin?.length,
            });
        }
    }, [tasks]);

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Home" />
            <ScrollView>
                <Title variant="secondary">Daily Tasks:</Title>

                <View style={styles.row}>
                    <StatusCard
                        label="High Priority"
                        count={counts?.highPriority}
                    />
                    <StatusCard
                        label="Due Deadline"
                        type="error"
                        count={counts?.dueDeadline}
                    />
                    <StatusCard
                        label="Quick Win"
                        count={counts?.quickWin}
                    />
                </View>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Tasks')}
                >
                    <Text style={styles.title}>Check all my tasks</Text>
                    <Text style={styles.subtitle}>
                        See all tasks and filter them by categories you have
                        selected when creating them
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            <PlusIcon />
        </SafeAreaView>
    );
});
