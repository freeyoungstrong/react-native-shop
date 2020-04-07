import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import store from './src/redux/store';
import { LoginScreen } from './src/screens/login/login';
import { RegistrationScreen } from './src/screens/registration/registration';
import { Main } from './src/screens/main/main';
import { ProductDetails } from './src/screens/productDetails/productDetails';
import { routes } from './src/constants/routes';
import { AuthContext } from './src/context/context';

if (__DEV__) {
    import('./reactotron-config').then(() => console.log('Reactotron Configured'));
}

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main" component={HomeStackScreen} />
            <Drawer.Screen name="Screen2" component={ProductDetails} />
        </Drawer.Navigator>
    );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={routes.MAIN} component={Main} />
            <HomeStack.Screen name={routes.PRODUCT_DETAILS} component={ProductDetails} />
        </HomeStack.Navigator>
    );
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={routes.LOGIN} component={LoginScreen} />
            <AuthStack.Screen name={routes.REGISTRATION} component={RegistrationScreen} />
        </AuthStack.Navigator>
    );
};

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => {
    return (
        <RootStack.Navigator>
            {userToken ? (
                <RootStack.Screen name="App" component={DrawerScreen} />
            ) : (
                <RootStack.Screen name="Auth" component={AuthStackScreen} />
            )}
        </RootStack.Navigator>
    );
};

const App = () => {
    const [userToken, setUserToken] = React.useState(null);

    const authContext = React.useMemo(() => {
        return {
            signIn: () => {
                setUserToken('asdf');
            },
            signUp: () => {
                setUserToken('asdf');
            },
        };
    }, []);
    return (
        <Provider store={store}>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>
                    <RootStackScreen userToken={userToken} />
                </NavigationContainer>
            </AuthContext.Provider>
        </Provider>
    );
};

export default App;
