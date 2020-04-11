import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import { Input, Button, NavQuestion } from 'shared/components';
import { loc } from 'shared/assets';
import { routes } from 'shared/constants';
import { AuthContext } from 'shared/context';
import { colors } from 'shared/assets';

export const LoginScreen = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    const [loginName, onChangeLoginName] = useState('');
    const [password, onChangePassword] = useState('');
    const onPressSignIn = async () => {
        const formData = new FormData();
        formData.append('loginname', loginName);
        formData.append('password', password);
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
                Alert.alert(loc('login.button.error.title'), result.error);
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
    return (
        // <KeyboardAwareScrollView
        // style={styles.scrollView}
        // contentContainerStyle={styles.scrollContent}
        // extraHeight={20}
        // enableOnAndroid>

        // TODO: KeyboardAwareScrollView + gradient background
        <LinearGradient
            colors={[colors.lightBlue, colors.lightPurple, colors.lightPink, colors.lightOrange]}
            style={styles.scrollContent}>
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
                // onPress={onPressSignIn}
                onPress={signIn} //this is temporary logic
                buttonStyle={styles.buttonStyle}
                buttonStyleTitle={styles.buttonTitle}
            />
            <NavQuestion title={loc('login.navQuestion2.title')} onPress={onPressNavQuestionSignUp} />
        </LinearGradient>
        // </KeyboardAwareScrollView>
    );
};
