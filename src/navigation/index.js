import React, { useCallback } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';

import {
    LoginScreen,
    RegistrationScreen,
    Main,
    ProductDetails,
    WelcomeScreen,
    MapScreen,
    CartScreen,
    UserProfileScreen,
} from 'screens';
import { routes } from 'shared/constants';
import { colors, loc } from 'shared/assets';
import { styles } from './styles';

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
                <DrawerStack.Screen name={routes.CART} component={CartScreen} />
            </DrawerStack.Navigator>
        );
    };

    const HeaderRight = () => {
        return (
            <TouchableOpacity style={styles.cart} onPress={() => Alert.alert('Move to cart screen')}>
                <FontAwesomeIcon size={30} name="shopping-cart" />
            </TouchableOpacity>
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
                        title: loc('login.title'),
                        headerRight: HeaderRight,
                    }}
                />
                <HomeStack.Screen
                    name={routes.PRODUCT_DETAILS}
                    component={ProductDetails}
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
