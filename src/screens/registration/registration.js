import React, { useState, useCallback } from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import NetInfo from '@react-native-community/netinfo';

import { styles } from './styles';
import { Input, Button, NavQuestion, Modal } from 'shared/components';
import { loc } from 'shared/assets';
import { routes } from 'shared/constants';
import { colors } from 'shared/assets';

export const RegistrationScreen = ({ navigation }) => {
    const [fullName, onChangeFullName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');
    const [modalAskInternetVisible, setModalAskInternetVisible] = useState(false);

    const onPressSignUp = useCallback(() => {
        NetInfo.fetch().then(state => {
            if (!state.isConnected) {
                setModalAskInternetVisible(true);
            } else {
                navigation.navigate(routes.HOME, { screen: routes.MAIN });
            }
        });
    }, []);

    const onPressNavQuestion = useCallback(() => {
        navigation.navigate(routes.LOGIN);
    }, []);

    return (
        <LinearGradient
            colors={[colors.lightBlue, colors.lightPurple, colors.lightPink, colors.lightOrange]}
            style={styles.scrollContent}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                extraHeight={20}
                enableOnAndroid>
                <Modal
                    visible={modalAskInternetVisible}
                    onClose={setModalAskInternetVisible}
                    title={loc('ask-internet.title')}
                    description={loc('ask-internet.description')}
                />
                <Text style={styles.title}>{loc('registration.title')}</Text>
                <Input onChangeText={onChangeFullName} text={fullName} placeholder={loc('registration.fullName')} />
                <Input onChangeText={onChangeEmail} value={email} placeholder={loc('registration.email')} />
                <Input onChangeText={onChangePassword} value={password} placeholder={loc('registration.password')} />
                <Input
                    onChangeText={onChangeConfirmPassword}
                    value={confirmPassword}
                    placeholder={loc('registration.confirmPassword')}
                />
                <Button
                    title={loc('registration.button.title').toUpperCase()}
                    onPress={onPressSignUp}
                    disabled
                    fullWidth
                />
                <NavQuestion title={loc('registration.navQuestion.title')} onPress={onPressNavQuestion} />
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};
