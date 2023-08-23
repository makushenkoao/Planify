import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    input: {
        paddingHorizontal: 24,
        paddingVertical: 13,
        borderRadius: 10,
        color: colors.black,
        marginVertical: 12,
        fontSize: 15,
    },
    default: {
        backgroundColor: colors.lightGrey,
    },
    outlined: {
        marginHorizontal: 24,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.grey,
    },
});
