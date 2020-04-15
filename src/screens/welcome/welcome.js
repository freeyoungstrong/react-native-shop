import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

import { styles } from './styles';
import { Button } from 'shared/components';
import { loc } from 'shared/assets';
import { routes } from 'shared/constants';
import { colors } from 'shared/assets';

export const WelcomeScreen = ({ navigation }) => {
    const onPressLogin = () => {
        navigation.navigate(routes.LOGIN);
    };
    const onPressRegistration = () => {
        navigation.navigate(routes.REGISTRATION);
    };
    return (
        <LinearGradient
            colors={[colors.lightBlue, colors.lightPurple, colors.lightPink, colors.lightOrange]}
            style={styles.container}>
            <LottieView source={require('./animation.json')} style={styles.animation} autoPlay loop />
            <Button
                onPress={onPressLogin}
                buttonStyle={styles.buttonStyle}
                title={loc('welcome.login')}
                buttonStyleTitle={styles.buttonTitle}
            />
            <Button
                onPress={onPressRegistration}
                buttonStyle={styles.buttonStyle}
                title={loc('welcome.registration')}
                buttonStyleTitle={styles.buttonTitle}
            />
        </LinearGradient>
    );
};
