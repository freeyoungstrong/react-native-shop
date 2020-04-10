import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const Button = ({ title, onPress, buttonStyle, buttonStyleTitle } = {}) => {
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={buttonStyleTitle}>{title}</Text>
        </TouchableOpacity>
    );
};
