import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const Button = ({ onPress, title } = {}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    );
};
