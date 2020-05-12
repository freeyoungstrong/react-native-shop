import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';

import { LoginScreen, RegistrationScreen, Main, ProductDetails, WelcomeScreen } from 'screens';
import { routes } from 'shared/constants';
import { colors } from 'shared/assets';
import { styles } from './styles';

const RootStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const HomeStack = createStackNavigator();

const onPressShare = () => {
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
            err && console.log(err);
        });
};

const CustomDrawerContent = props => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Share" onPress={onPressShare} />
        </DrawerContentScrollView>
    );
};

const DrawerNavigator = () => {
    return (
        <DrawerStack.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <DrawerStack.Screen name={routes.MAIN} component={HomeStackNavigator} />
            <DrawerStack.Screen name="MockScreen1" component={ProductDetails} />
            <DrawerStack.Screen name="MockScreen2" component={ProductDetails} />
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
                    title: 'Ecommerse Store',
                    headerRight: HeaderRight,
                }}
            />
            <HomeStack.Screen
                name={routes.PRODUCT_DETAILS}
                component={ProductDetails}
                options={{
                    headerStyle: { backgroundColor: colors.lightBlue },
                    title: null,
                    headerBackTitle: 'Back',
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
