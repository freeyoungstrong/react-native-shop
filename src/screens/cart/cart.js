import React from 'react';
import { Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import he from 'he';

import { styles } from './styles';

export const CartScreen = () => {
    const productsInCart = useSelector(({ productsInCart: { products = [] } = {} } = {}) => products).map(
        ({ thumb, name, key }) => (
            <TouchableOpacity key={key}>
                <Image
                    style={styles.image}
                    source={{
                        uri: `http:${thumb}`,
                    }}
                />
                <Text>{he.decode(name)}</Text>
            </TouchableOpacity>
        ),
    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {productsInCart.length > 1 ? productsInCart : <Text>Your cart is empty</Text>}
        </ScrollView>
    );
};
