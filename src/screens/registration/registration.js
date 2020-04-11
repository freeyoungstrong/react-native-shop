import React, { useState } from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import { Input, Button, NavQuestion } from 'shared/components';
import { loc } from 'shared/assets';
import { routes } from 'shared/constants';
import { AuthContext } from 'shared/context';
import { colors } from 'shared/assets';

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
        // <KeyboardAwareScrollView
        //     style={styles.scrollView}
        //     contentContainerStyle={styles.scrollContent}
        //     extraHeight={20}
        //     enableOnAndroid>

        // TODO: KeyboardAwareScrollView + gradient background
        <LinearGradient
            colors={[colors.lightBlue, colors.lightPurple, colors.lightPink, colors.lightOrange]}
            style={styles.scrollContent}>
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
                // onPress={onPressSignUp}
                onPress={signUp} // this is temporary logic
                buttonStyle={styles.buttonStyle}
                buttonStyleTitle={styles.buttonTitle}
            />
            <NavQuestion title={loc('registration.navQuestion.title')} onPress={onPressNavQuestion} />
            {/* </KeyboardAwareScrollView> */}
        </LinearGradient>
    );
};
