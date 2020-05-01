import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import store from 'shared/redux/store';
import { Navigator } from './src/navigation';

if (__DEV__) {
    import('./reactotron-config').then(() => console.log('Reactotron Configured'));
}

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
