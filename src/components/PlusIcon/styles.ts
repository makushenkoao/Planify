import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: colors.blue,
        width: 60,
        height: 60,
        position: 'absolute',
        right: 24,
        bottom: 24,
    },
    plus: {
        marginTop: -3,
        fontSize: 32,
        fontWeight: '600',
        color: colors.white,
    },
});
