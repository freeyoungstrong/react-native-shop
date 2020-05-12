import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';

import store from 'shared/redux/store';
import { Navigator } from './src/navigation';

if (__DEV__) {
    import('./reactotron-config').then(() => console.log('Reactotron Configured'));
}

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer theme={MyTheme}>
                <Navigator />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
