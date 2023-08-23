import { Text } from 'react-native';
import { memo, ReactNode } from 'react';
import styles from './styles';

type TitleVariant = 'primary' | 'secondary';
interface TitleProps {
    children: ReactNode;
    variant?: TitleVariant;
}

export const Title = memo((props: TitleProps) => {
    const { children, variant = 'primary' } = props;
    return <Text style={styles[variant]}>{children}</Text>;
});
