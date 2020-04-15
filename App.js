import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import store from 'shared/redux/store';
import { LoginScreen, RegistrationScreen, Main, ProductDetails, WelcomeScreen } from 'screens';
import { routes } from 'shared/constants';
import { AuthContext } from 'shared/context';
import { colors } from 'shared/assets';

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
            <HomeStack.Screen
                name={routes.MAIN}
                component={Main}
                options={{
                    headerStyle: { backgroundColor: colors.lightBlue, height: 100 },
                    headerTintColor: colors.white,
                    title: 'Ecommerse Store',
                }}
            />
            <HomeStack.Screen
                name={routes.PRODUCT_DETAILS}
                component={ProductDetails}
                options={{
                    headerStyle: { backgroundColor: colors.lightBlue },
                    title: null,
                }}
            />
        </HomeStack.Navigator>
    );
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={routes.WELCOME} component={WelcomeScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name={routes.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
            <AuthStack.Screen
                name={routes.REGISTRATION}
                component={RegistrationScreen}
                options={{
                    headerStyle: { backgroundColor: colors.lightBlue },
                    title: null,
                }}
            />
        </AuthStack.Navigator>
    );
};

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => {
    return (
        <RootStack.Navigator>
            {userToken ? (
                <RootStack.Screen name="App" component={DrawerScreen} options={{ headerShown: false }} />
            ) : (
                <RootStack.Screen name="Auth" component={AuthStackScreen} options={{ headerShown: false }} />
            )}
        </RootStack.Navigator>
    );
};

const App = () => {
    const [userToken, setUserToken] = React.useState(null);
    const authContext = React.useMemo(() => {
        return {
            signIn: () => {
                setTimeout(() => setUserToken('asdf'), 500); //imitation of request to the server
            },
            signUp: () => {
                setTimeout(() => setUserToken('asdf'), 500); //imitation of request to the serve
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
