import styles from './styles';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { memo, useEffect, useState } from 'react';
import { Header } from '../../../components/Header';
import { PlusIcon } from '../../../components/PlusIcon';
import { Title } from '../../../components/Title';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Checkbox } from '../../../components/Checkbox';
import { ITask } from '../../../types/task';
import firestore from '@react-native-firebase/firestore';
import { setToUpdate } from '../../../store/tasks';
import { Categories } from '../../../components/Categories';
import { categories } from '../../../constants';
export const Tasks = memo(() => {
    const tasks = useAppSelector((state) => state.tasks.data);
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState<string | null>('all');
    const [filteredTasks, setFilteredTasks] = useState<ITask[]>([]);

    useEffect(() => {
        if (category && category !== 'all') {
            const filtered = tasks?.filter(
                (task) => task?.category === category,
            );
            setFilteredTasks(filtered as ITask[]);
        } else {
            setFilteredTasks(tasks as ITask[]);
        }
    }, [category, tasks]);

    const onTaskUpdate = (item: ITask) => {
        firestore()
            .collection('Tasks')
            .doc(item?.uid)
            .update({
                checked: !item.checked,
            })
            .then(() => {
                dispatch(setToUpdate());
            });
    };

    const renderTask = ({ item }: { item: ITask }) => {
        return (
            <View style={styles.row}>
                <Checkbox
                    checked={item.checked}
                    onPress={() => onTaskUpdate(item)}
                />
                <Text
                    style={[
                        styles.taskText,
                        item?.checked ? styles.checked : {},
                    ]}
                >
                    {item.title}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Tasks" />
            <FlatList
                ListHeaderComponent={
                    <View style={{ marginBottom: 24 }}>
                        <Title variant="secondary">To Do Tasks</Title>
                        <Categories
                            categories={[
                                { label: 'All', value: 'all' },
                                ...categories,
                            ]}
                            selectedCategory={category}
                            onPressCategory={setCategory}
                        />
                    </View>
                }
                data={filteredTasks}
                renderItem={renderTask}
                keyExtractor={(item) => String(item?.uid)}
            />
            <PlusIcon />
        </SafeAreaView>
    );
});
