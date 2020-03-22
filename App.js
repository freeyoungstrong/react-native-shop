import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Counter from './src/components/Counter';
import store from './src/store';

if (__DEV__) {
    import('./reactotron-config').then(() => console.log('Reactotron Configured'));
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
}

export default App;
