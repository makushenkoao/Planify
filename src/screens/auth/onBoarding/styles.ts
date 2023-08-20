import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    image: {
        width: '100%',
        flex: 1,
    },
    imageWrapper: {
        flex: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: colors.white,
        height: 46,
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    title: {
        color: colors.black,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    subtitle: {
        fontSize: 15,
        color: colors.grey,
        textAlign: 'center',
        marginVertical: 16,
    },
    container: {
        flex: 1,
    },
    content: {
        padding: 46,
        paddingTop: 0,
        backgroundColor: colors.white,
    },
});
