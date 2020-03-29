import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './styles';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { NavQuestion } from '../../components/NavQuestion/navQuestion';

export const RegistrationScreen = () => {
    const [fullName, onChangeFullName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');
    const onPressSignUp = () => {
        Alert.alert('You signed up. Congrats!');
    };
    const onPressNavQuestion = () => {
        Alert.alert('You signed up. Congrats!');
    };
    return (
        <KeyboardAwareScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            extraHeight={20}
            enableOnAndroid>
            <Text style={styles.title}>Ecommerce Store</Text>
            <Input onChangeText={onChangeFullName} text={fullName} placeholder="Full Name" />
            <Input onChangeText={onChangeEmail} value={email} placeholder="Email Address" />
            <Input onChangeText={onChangePassword} value={password} placeholder="Password" />
            <Input onChangeText={onChangeConfirmPassword} value={confirmPassword} placeholder="Confirm Password" />
            <Button title="SIGN UP" onPress={onPressSignUp} />
            <NavQuestion title="Already have account? Sign In" onPress={onPressNavQuestion} />
        </KeyboardAwareScrollView>
    );
};
