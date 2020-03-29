import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const Button = props => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
};
