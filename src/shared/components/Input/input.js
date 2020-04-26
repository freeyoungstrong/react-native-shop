import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

export const Input = ({ onChangeText, text, placeholder, secure } = {}) => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder={placeholder}
            secureTextEntry={secure}
            autoCapitalize="none"
        />
    );
};
