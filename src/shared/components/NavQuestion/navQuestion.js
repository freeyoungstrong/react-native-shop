import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const NavQuestion = ({ onPress, title, style } = {}) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.lable}>{title}</Text>
        </TouchableOpacity>
    );
};
