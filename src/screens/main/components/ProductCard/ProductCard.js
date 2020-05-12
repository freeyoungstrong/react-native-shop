import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

export const ProductCard = ({ title, price, source }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: source }} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{`$ ${price}`}</Text>
            </View>
        </View>
    );
};
