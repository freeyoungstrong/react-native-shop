import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductCard } from '../ProductCard/ProductCard';
import { routes } from 'shared/constants';
import { styles } from './styles';

export const ProductsList = ({ navigation }) => {
    const onPressProduct = useCallback(
        prod => {
            navigation.navigate(routes.PRODUCT_DETAILS, { product: prod });
        },
        [navigation],
    );
    const productsList = useSelector(state => state.products.products).map(prod => (
        <TouchableOpacity onPress={() => onPressProduct(prod)} key={prod.id}>
            <ProductCard
                title={prod.cell.name}
                price={prod.cell.price}
                key={prod.id}
                source={`http:${prod.cell.thumb}`}
            />
        </TouchableOpacity>
    ));

    return (
        <View>
            <View style={styles.productsList}>
                {productsList ? productsList : <Text>Here should be list of products</Text>}
            </View>
        </View>
    );
};
