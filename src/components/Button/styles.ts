import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
    },
    primary: {
        backgroundColor: colors.purple,
    },
    secondary: {
        backgroundColor: colors.blue,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
