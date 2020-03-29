import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const NavQuestion = props => {
    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
};
