import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './styles';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { NavQuestion } from '../../components/NavQuestion/navQuestion';

export const LoginScreen = () => {
    const [loginName, onChangeLoginName] = useState('');
    const [password, onChangePassword] = useState('');
    const onPressSignIn = async () => {
        try {
            let response = await fetch(
                `https://34.73.95.65/index.php?rt=account/login&loginname=${loginName}&password=${password}`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    // body: JSON.stringify({
                    //     loginname: loginName,
                    //     password: password,
                    // }),
                },
            );
            if (response.status === 1) {
                return response.success;
            } else {
                throw new Error('Login attempt failed!');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onPressNavQuestionSignUp = () => {
        Alert.alert('Moved to RegistrationScreen');
    };
    const onPressNavQuestionForgotPassword = () => {
        Alert.alert('Moved to RecoveryPasswordScreen');
    };
    return (
        <KeyboardAwareScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            extraHeight={20}
            enableOnAndroid>
            <Text style={styles.title}>Ecommerce Store</Text>
            <Input onChangeText={onChangeLoginName} value={loginName} placeholder="Login Name" />
            <Input secure={true} onChangeText={onChangePassword} value={password} placeholder="Password" />
            <NavQuestion
                title="Forgot password?"
                onPress={onPressNavQuestionForgotPassword}
                style={{ alignSelf: 'flex-end', right: '7.5%' }}
            />
            <Button title="SIGN IN" onPress={onPressSignIn} />
            <NavQuestion title="New here? Sign Up" onPress={onPressNavQuestionSignUp} />
        </KeyboardAwareScrollView>
    );
};
