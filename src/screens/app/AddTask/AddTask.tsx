import { memo, useCallback, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Title } from '../../../components/Title';
import { Input } from '../../../components/Input';
import { Categories } from '../../../components/Categories';
import { categories } from '../../../constants';
import { DateInput } from '../../../components/DateInput';
import styles from './styles';
import { Button } from '../../../components/Button';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

interface AddTaskProps {
    navigation: NavigationProp<any>;
}
export const AddTask = memo((props: AddTaskProps) => {
    const { navigation } = props;
    const [category, setCategory] = useState<string | null>('');
    const [title, setTitle] = useState<string>('');
    const [deadline, setDeadline] = useState<Date>(new Date());
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const onSubmit = useCallback(() => {
        const today = moment(new Date()).format('YYYY-MM-DD');
        const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
        if (!title) {
            Alert.alert('Please enter the task title');
            return;
        }

        if (!category) {
            Alert.alert('Please select a category');
            return;
        }

        if (moment(deadlineFormatted).isBefore(today)) {
            Alert.alert('Please enter future date');
            return;
        }

        setIsLoading(true);
        firestore()
            .collection('Tasks')
            .doc('ABC')
            .set({
                title,
                deadline,
                category,
            })
            .then(() => {
                setIsLoading(false);
                navigation.navigate('Tasks');
                setTitle('');
                setDeadline(new Date());
                setCategory(null);
            })
            .catch((e) => {
                console.log('error when adding task :>> ', e);
                setIsLoading(false);
                Alert.alert(e.message);
            });
    }, [category, deadline, navigation, title]);

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
            <ScrollView>
                <Title variant="secondary">Add New Task</Title>
                <Text style={styles.label}>Describe the task</Text>
                <Input
                    value={title}
                    onChangeText={setTitle}
                    variant="outlined"
                    placeholder="Type here..."
                />
                <Text style={styles.label}>Type</Text>
                <Categories
                    categories={categories}
                    selectedCategory={category}
                    onPressCategory={setCategory}
                />
                <Text style={styles.label}>Deadline</Text>
                <DateInput
                    date={deadline}
                    setDate={setDeadline}
                />

                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <Button
                        variant="secondary"
                        onPress={onSubmit}
                        style={styles.button}
                    >
                        Add the task
                    </Button>
                )}
            </ScrollView>
        </SafeAreaView>
    );
});
