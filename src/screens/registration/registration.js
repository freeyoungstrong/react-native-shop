import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './styles';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';
import { NavQuestion } from '../../components/NavQuestion/navQuestion';
import { loc } from '../../assets/locales';
import { routes } from '../../constants/routes';
import { AuthContext } from '../../context/context';

export const RegistrationScreen = ({ navigation }) => {
    const { signUp } = React.useContext(AuthContext);
    const [fullName, onChangeFullName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');
    const onPressSignUp = () => {
        navigation.navigate(routes.MAIN);
    };
    const onPressNavQuestion = () => {
        navigation.navigate(routes.LOGIN);
    };
    return (
        <KeyboardAwareScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            extraHeight={20}
            enableOnAndroid>
            <Text style={styles.title}>Ecommerce Store</Text>
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
                // onPress={onPressSignUp}
                onPress={signUp} // this is temporary logic
                buttonStyle={styles.buttonStyle}
                buttonStyleTitle={styles.buttonTitle}
            />
            <NavQuestion title={loc('registration.navQuestion.title')} onPress={onPressNavQuestion} />
        </KeyboardAwareScrollView>
    );
};
