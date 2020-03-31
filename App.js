import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { LoginScreen } from './src/screens/login/login';
import { RegistrationScreen } from './src/screens/registration/registration';
import store from './src/store';

if (__DEV__) {
    import('./reactotron-config').then(() => console.log('Reactotron Configured'));
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <LoginScreen />
                {/* <RegistrationScreen /> */}
            </Provider>
        );
    }
}

export default App;
