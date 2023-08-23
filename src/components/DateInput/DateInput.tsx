import { memo, useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import styles from './styles';

interface DateInputProps {
    date: Date;
    setDate: (date: Date) => void;
}

export const DateInput = memo((props: DateInputProps) => {
    const { date, setDate } = props;
    const [open, setOpen] = useState<boolean>(false);

    const onDateOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <TouchableOpacity
                onPress={onDateOpen}
                style={styles.outlined}
            >
                <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={require('../../assets/images/calendar.png')}
                />
                <Text style={styles.text}>
                    {moment(date).format('L') || 'Select Date...'}
                </Text>
            </TouchableOpacity>
            <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={(value) => {
                    setOpen(false);
                    setDate(value);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </>
    );
});
