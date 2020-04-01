import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './styles';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { NavQuestion } from '../../components/NavQuestion/navQuestion';
import { loc } from '../../assets/locales';

export const LoginScreen = ({ navigation }) => {
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
                Alert.alert(loc('login.button.success.title'), result.success);
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
        navigation.navigate('Registration');
    };
    return (
        <KeyboardAwareScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            extraHeight={20}
            enableOnAndroid>
            <Text style={styles.title}>Ecommerce Store</Text>
            <Input onChangeText={onChangeLoginName} value={loginName} placeholder={loc('login.loginName')} />
            <Input secure={true} onChangeText={onChangePassword} value={password} placeholder={loc('login.password')} />
            <NavQuestion
                title={loc('login.navQuestion1.title')}
                onPress={onPressNavQuestionForgotPassword}
                style={styles.navQuestion}
            />
            <Button title={loc('login.button.title').toUpperCase()} onPress={onPressSignIn} />
            <NavQuestion title={loc('login.navQuestion2.title')} onPress={onPressNavQuestionSignUp} />
        </KeyboardAwareScrollView>
    );
};
