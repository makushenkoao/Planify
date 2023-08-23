import { memo } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes/Routes';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App() {
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#fff',
        },
    };
    return (
        <Provider store={store}>
            <NavigationContainer theme={theme}>
                <Routes />
            </NavigationContainer>
        </Provider>
    );
}

export default memo(App);
