import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
    },
    footerText: {
        color: colors.grey,
        fontSize: 15,
        marginTop: 28,
        textAlign: 'center',
    },
    footerLink: {
        fontWeight: 'bold',
        color: colors.purple,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    agreeText: {
        fontSize: 12,
        color: colors.grey,
        marginLeft: 8,
    },
    agreeLink: {
        textDecorationLine: 'underline',
    },
});
