import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const Product = ({ title, cost }) => {
    return (
        <View style={styles.container}>
            <View style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.cost}>{`$ ${cost}`}</Text>
            </View>
        </View>
    );
};
