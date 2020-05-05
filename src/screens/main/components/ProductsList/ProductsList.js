import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductCard } from '../ProductCard/ProductCard';
import { routes } from 'shared/constants';
import { styles } from './styles';

export const ProductsList = ({ navigation }) => {
    const onPressProduct = useCallback(
        product => {
            navigation.navigate(routes.PRODUCT_DETAILS, { product });
        },
        [navigation],
    );
    const productsList = useSelector(state => state.products.products).map(prod => {
        const {
            id,
            cell: { name, price, thumb },
        } = prod;
        return (
            <TouchableOpacity onPress={() => onPressProduct(prod)} key={id}>
                <ProductCard title={name} price={price} key={prod.id} source={`http:${thumb}`} />
            </TouchableOpacity>
        );
    });

    return (
        <View>
            <View style={styles.productsList}>
                {productsList ? productsList : <Text>Here should be list of products</Text>}
            </View>
        </View>
    );
};
