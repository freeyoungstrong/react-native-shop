import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Button } from 'shared/components';
import { styles } from './styles';
import { logout } from 'shared/redux/actions';
import { routes } from 'shared/constants';
import { loc } from 'shared/assets';

export const UserProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const firstname = useSelector(({ user: { firstname = '' } = {} } = {}) => firstname);
    const lastname = useSelector(({ user: { lastname = '' } = {} } = {}) => lastname);
    const email = useSelector(({ user: { email = '' } = {} } = {}) => email);
    const isLoading = useSelector(state => state.user.isLoading);

    const onPressLogout = useCallback(() => {
        dispatch(logout());
        navigation.navigate(routes.LOGIN);
    }, [dispatch]);

    return (
        <>
            <Header navigation={navigation} title={loc('user-profile.title')} />
            <View style={styles.container}>
                <Icon size={120} name="account" />
                <View>
                    <Text>{loc('user-profile.firstname', { firstname })}</Text>
                    <Text>{loc('user-profile.lastname', { lastname })}</Text>
                    <Text>{loc('user-profile.email', { email })}</Text>
                </View>
                <Button
                    title={loc('user-profile.button')}
                    onPress={onPressLogout}
                    icon={<Icon size={25} name="logout" />}
                    type="outline"
                    isLoading={isLoading}
                />
            </View>
        </>
    );
};
