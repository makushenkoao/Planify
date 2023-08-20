import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.purple,
        borderRadius: 3,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2,
    },
    checkedBox: {
        borderWidth: 2,
    },
    innerSquare: {
        width: 10,
        height: 10,
        backgroundColor: colors.purple,
    },
});
