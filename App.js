import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import store from './src/redux/store';
import { LoginScreen } from './src/screens/login/login';
import { RegistrationScreen } from './src/screens/registration/registration';
import { Main } from './src/screens/main/main';
import { ProductDetails } from './src/screens/productDetails/productDetails';
import { routes } from './src/constants/routes';

if (__DEV__) {
    import('./reactotron-config').then(() => console.log('Reactotron Configured'));
}

const App = () => {
    const Stack = createStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={routes.LOGIN}>
                    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
                    <Stack.Screen name={routes.REGISTRATION} component={RegistrationScreen} />
                    <Stack.Screen name={routes.MAIN} component={Main} />
                    <Stack.Screen name={routes.PRODUCT_DETAILS} component={ProductDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
