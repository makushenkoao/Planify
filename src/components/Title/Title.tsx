import { Text } from 'react-native';
import { memo, ReactNode } from 'react';
import styles from './styles';

interface TitleProps {
    children: ReactNode;
}

export const Title = memo((props: TitleProps) => {
    const { children } = props;
    return <Text style={styles.title}>{children}</Text>;
});
