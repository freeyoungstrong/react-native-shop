import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { LoginScreen, RegistrationScreen, Main, ProductDetails, WelcomeScreen } from 'screens';
import { routes } from 'shared/constants';
import { colors } from 'shared/assets';

const RootStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const HomeStack = createStackNavigator();

const DrawerNavigator = () => {
    return (
        <DrawerStack.Navigator>
            <DrawerStack.Screen name={routes.MAIN} component={HomeStackNavigator} />
            <DrawerStack.Screen name="MockScreen1" component={ProductDetails} />
            <DrawerStack.Screen name="MockScreen2" component={ProductDetails} />
        </DrawerStack.Navigator>
    );
};

const HomeStackNavigator = () => {
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

export const Navigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name={routes.WELCOME} component={WelcomeScreen} options={{ headerShown: false }} />
            <RootStack.Screen
                name={routes.LOGIN}
                component={LoginScreen}
                options={{ gestureEnabled: false, headerShown: false }}
            />
            <RootStack.Screen
                name={routes.REGISTRATION}
                component={RegistrationScreen}
                options={{
                    headerStyle: { backgroundColor: colors.lightBlue },
                    title: null,
                }}
            />
            <RootStack.Screen
                name={routes.HOME}
                component={DrawerNavigator}
                options={{ gestureEnabled: false, headerShown: false }}
            />
        </RootStack.Navigator>
    );
};
