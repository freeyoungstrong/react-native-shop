import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { routes } from 'shared/constants';
import { styles } from './styles';

export const Header = ({ navigation, title }) => {
    const onPressCart = useCallback(() => navigation.navigate(routes.CART), [navigation]);

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={navigation.openDrawer}>
                <Icon size={35} name="menu" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onPressCart}>
                <Icon size={35} name="cart" />
            </TouchableOpacity>
        </View>
    );
};
