import React, { useState } from 'react';
import { Text, Alert, Vibration } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import NetInfo from '@react-native-community/netinfo';

import { styles } from './styles';
import { Input, Button, NavQuestion, ModalView } from 'shared/components';
import { loc } from 'shared/assets';
import { routes } from 'shared/constants';
import { AuthContext } from 'shared/context';
import { colors } from 'shared/assets';

const ONE_SECOND_IN_MS = 1000;

export const LoginScreen = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    const [loginName, onChangeLoginName] = useState('');
    const [password, onChangePassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalAskInternetVisible, setModalAskInternetVisible] = useState(false);

    const onPressSignIn = async () => {
        const formData = new FormData();
        formData.append('loginname', loginName);
        formData.append('password', password);
        NetInfo.fetch().then(state => {
            if (!state.isConnected) {
                setModalAskInternetVisible(true);
            }
        });
        try {
            const response = await fetch('http://34.73.95.65/index.php?rt=a/account/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });
            const result = await response.json();
            if (result.status === 1) {
                navigation.navigate(routes.MAIN);
            } else {
                setModalVisible(true);
                Vibration.vibrate(ONE_SECOND_IN_MS);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const onPressNavQuestionForgotPassword = () => {
        Alert.alert(loc('login.navQuestion1.move'));
    };
    const onPressNavQuestionSignUp = () => {
        navigation.navigate(routes.REGISTRATION, { screen: routes.REGISTRATION });
    };
    const opacityStyle = {
        opacity: 0.5,
    };
    return (
        // <KeyboardAwareScrollView
        // style={styles.scrollView}
        // contentContainerStyle={styles.scrollContent}
        // extraHeight={20}
        // enableOnAndroid>

        // TODO: KeyboardAwareScrollView + gradient background
        <LinearGradient
            colors={[colors.lightBlue, colors.lightPurple, colors.lightPink, colors.lightOrange]}
            style={modalVisible ? [styles.scrollContent, opacityStyle] : styles.scrollContent}>
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
            <Input onChangeText={onChangeLoginName} value={loginName} placeholder={loc('login.loginName')} />
            <Input secure={true} onChangeText={onChangePassword} value={password} placeholder={loc('login.password')} />
            <NavQuestion
                title={loc('login.navQuestion1.title')}
                onPress={onPressNavQuestionForgotPassword}
                style={styles.navQuestion}
            />
            <Button
                title={loc('login.button.title').toUpperCase()}
                onPress={onPressSignIn}
                // onPress={signIn} //this is temporary logic
                buttonStyle={styles.buttonStyle}
                buttonStyleTitle={styles.buttonTitle}
            />
            <NavQuestion title={loc('login.navQuestion2.title')} onPress={onPressNavQuestionSignUp} />
        </LinearGradient>
        // </KeyboardAwareScrollView>
    );
};
