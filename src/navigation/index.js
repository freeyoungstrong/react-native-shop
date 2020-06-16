import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Share from 'react-native-share';

import {
    LoginScreen,
    RegistrationScreen,
    MainScreen,
    ProductDetailsScreen,
    WelcomeScreen,
    MapScreen,
    CartScreen,
    UserProfileScreen,
} from 'screens';
import { routes } from 'shared/constants';
import { colors, loc } from 'shared/assets';

export const Navigator = () => {
    const RootStack = createStackNavigator();
    const DrawerStack = createDrawerNavigator();
    const HomeStack = createStackNavigator();

    const onPressShare = useCallback(() => {
        const options = {
            title: 'Awesome Contents',
            message: 'Please check this out',
            url: 'https://awesome.contents.com/',
        };
        Share.open(options)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                err && console.log('Error related to share functionality', err);
            });
    }, []);

    const CustomDrawerContent = props => {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem label={loc('drawer-navigation.share')} onPress={onPressShare} />
            </DrawerContentScrollView>
        );
    };

    const DrawerNavigator = () => {
        return (
            <DrawerStack.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
                <DrawerStack.Screen name={routes.MAIN} component={HomeStackNavigator} />
                <DrawerStack.Screen name={loc('user-profile.title')} component={UserProfileScreen} />
                <DrawerStack.Screen name={routes.MAP} component={MapScreen} />
            </DrawerStack.Navigator>
        );
    };

    const HomeStackNavigator = () => {
        return (
            <HomeStack.Navigator>
                <HomeStack.Screen
                    name={routes.MAIN}
                    component={MainScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <HomeStack.Screen
                    name={routes.PRODUCT_DETAILS}
                    component={ProductDetailsScreen}
                    options={{
                        headerStyle: { backgroundColor: colors.lightBlue },
                        title: null,
                        headerBackTitle: loc('common.back'),
                    }}
                />
                <HomeStack.Screen
                    name={routes.CART}
                    component={CartScreen}
                    options={{
                        headerStyle: { backgroundColor: colors.lightBlue },
                        title: null,
                        headerBackTitle: loc('common.back'),
                    }}
                />
            </HomeStack.Navigator>
        );
    };

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
