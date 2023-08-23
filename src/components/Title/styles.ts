import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    primary: {
        paddingVertical: 24,
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.black,
    },
    secondary: {
        padding: 24,
        fontSize: 24,
        color: colors.purple,
        fontWeight: '300',
    },
});
