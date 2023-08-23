import { memo } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes/Routes';

function App() {
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#fff',
        },
    };
    return (
        <NavigationContainer theme={theme}>
            <Routes />
        </NavigationContainer>
    );
}

export default memo(App);
