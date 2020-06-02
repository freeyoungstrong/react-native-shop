import React from 'react';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { logout } from 'shared/redux/actions';
import { routes } from 'shared/constants';
import { loc } from 'shared/assets';
import { Header } from 'shared/components';

export const UserProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const onPressLogout = () => {
        dispatch(logout());
        navigation.navigate(routes.LOGIN);
    };

    const firstname = useSelector(({ user: { firstname = '' } = {} } = {}) => firstname);
    const lastname = useSelector(({ user: { lastname = '' } = {} } = {}) => lastname);
    const email = useSelector(({ user: { email = '' } = {} } = {}) => email);

    return (
        <>
            <Header navigation={navigation} title={loc('user-profile.title')} />
            <ScrollView>
                <View style={styles.container}>
                    <Icon size={120} name="account" />
                    <View>
                        <Text>{loc('user-profile.firstname', { firstname })}</Text>
                        <Text>{loc('user-profile.lastname', { lastname })}</Text>
                        <Text>{loc('user-profile.email', { email })}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={onPressLogout}>
                        <Text>{loc('user-profile.button')}</Text>
                        <Icon size={30} name="logout" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};
