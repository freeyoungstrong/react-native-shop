import React, { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import ToastModule from 'react-native-toast-module';
import Crashes from 'appcenter-crashes';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { routes, USER } from 'shared/constants';
import { colors } from 'shared/assets';
import { getData } from 'shared/utils';
import { fetchCategories, fetchProducts } from 'shared/redux/actions';

export const WelcomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, [dispatch]);

    const onAnimationComplete = useCallback(async () => {
        if (await getData(USER)) {
            navigation.navigate(routes.HOME, { screen: routes.MAIN });
        } else {
            navigation.navigate(routes.LOGIN);
        }
    }, []);

    return (
        <LinearGradient
            colors={[colors.lightBlue, colors.lightPurple, colors.lightPink, colors.lightOrange]}
            style={styles.container}>
            <LottieView source={require('./animation.json')} style={styles.animation} autoPlay loop />
            <AnimatedCircularProgress
                size={170}
                width={10}
                fill={100}
                duration={3000}
                rotation={0}
                tintColor={colors.seaBlue}
                backgroundColor={colors.lightOrange}
                lineCap="round"
                onAnimationComplete={onAnimationComplete}
            />
        </LinearGradient>
    );
};

PushNotification.configure({
    onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
});

Crashes.setListener({
    shouldAwaitUserConfirmation() {
        console.log('Should await user confirmation');
        Alert.alert('One or more crashes were detected, do you want to report them?', null, [
            {
                text: 'Yes, and ask me again if it occurs again.',
                onPress: () => Crashes.notifyUserConfirmation(UserConfirmation.SEND),
            },
            {
                text: 'Yes, always send them',
                onPress: () => Crashes.notifyUserConfirmation(UserConfirmation.ALWAYS_SEND),
            },
            {
                text: "Don't send at this time",
                onPress: () => Crashes.notifyUserConfirmation(UserConfirmation.DONT_SEND),
            },
        ]);
        return true;
    },

    onBeforeSending() {
        console.log('Will send crash. onBeforeSending is invoked.');
        ToastModule.show('Sending crashes...');
    },

    onSendingSucceeded() {
        console.log('Did send crash. onSendingSucceeded is invoked.');
        ToastModule.show('Sending crashes succeeded.');
    },

    onSendingFailed() {
        console.log('Failed sending crash. onSendingFailed is invoked.');
        ToastModule.show('Sending crashes failed, please check verbose logs.');
    },
});
