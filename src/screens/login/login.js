import React, { useState, useCallback, useEffect } from 'react';
import { Text, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';
import { setEnabled } from 'appcenter-analytics';
import * as Keychain from 'react-native-keychain';

import { styles } from './styles';
import { Input, Button, NavQuestion, ModalView } from 'shared/components';
import { loc, colors } from 'shared/assets';
import { routes } from 'shared/constants';
import { login } from 'shared/redux/actions';

export const LoginScreen = ({ navigation }) => {
    const [loginName, onChangeLoginName] = useState('');
    const [password, onChangePassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalAskInternetVisible, setModalAskInternetVisible] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const analytics = async () => {
            await setEnabled(true);
        };
        analytics();
    }, [setEnabled]);

    const onPressSignIn = useCallback(async () => {
        NetInfo.fetch().then(state => {
            if (!state.isConnected) {
                setModalAskInternetVisible(true);
            }
        });

        await dispatch(login({ loginName, password }));

        const credentials = await Keychain.getGenericPassword();
        if (credentials.password) {
            navigation.navigate(routes.HOME, { screen: routes.MAIN });
        } else {
            setModalVisible(true);
        }
    }, [dispatch, loginName, password]);

    const onPressNavQuestionForgotPassword = useCallback(() => {
        Alert.alert(loc('login.navQuestion1.move'));
    }, []);

    const onPressNavQuestionSignUp = useCallback(() => {
        navigation.navigate(routes.REGISTRATION);
    }, []);

    const opacityStyle = {
        opacity: 0.5,
    };

    return (
        <LinearGradient
            colors={[colors.lightBlue, colors.lightPurple, colors.lightPink, colors.lightOrange]}
            style={modalVisible ? [styles.scrollContent, opacityStyle] : styles.scrollContent}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                extraHeight={20}
                enableOnAndroid>
                <ModalView
                    visible={modalVisible}
                    onClose={setModalVisible}
                    title={loc('login.button.error.title')}
                    description={loc('login.button.error.message')}
                />
                <ModalView
                    visible={modalAskInternetVisible}
                    onClose={setModalAskInternetVisible}
                    title={loc('ask-internet.title')}
                    description={loc('ask-internet.description')}
                />
                <Text style={styles.title}>{loc('login.title')}</Text>
                <Input onChangeText={onChangeLoginName} text={loginName} placeholder={loc('login.loginName')} />
                <Input
                    secure={true}
                    onChangeText={onChangePassword}
                    text={password}
                    placeholder={loc('login.password')}
                />
                <NavQuestion
                    title={loc('login.navQuestion1.title')}
                    onPress={onPressNavQuestionForgotPassword}
                    style={styles.navQuestion}
                />
                <Button
                    title={loc('login.button.title').toUpperCase()}
                    onPress={onPressSignIn}
                    buttonStyle={styles.buttonStyle}
                    buttonStyleTitle={styles.buttonTitle}
                />
                <NavQuestion title={loc('login.navQuestion2.title')} onPress={onPressNavQuestionSignUp} />
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};
