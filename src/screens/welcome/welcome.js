import React, { useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

import { styles } from './styles';
import { routes, USER } from 'shared/constants';
import { colors } from 'shared/assets';
import { getData } from 'shared/utils';

export const WelcomeScreen = ({ navigation }) => {
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
