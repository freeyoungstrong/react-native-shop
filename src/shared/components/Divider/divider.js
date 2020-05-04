import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export const Divider = ({ style }) => {
    return <View style={[styles.divider, style]} />;
};
