import React, { useCallback } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ProductCard } from '../ProductCard/ProductCard';
import { routes } from 'shared/constants';
import { styles } from './styles';
import { fetchProducts } from 'shared/redux/actions';

export const ProductsList = ({ navigation }) => {
    const dispatch = useDispatch();
    const products = useSelector(({ products: { products = [] } = {} } = {}) => products);
    const currentPage = useSelector(({ products: { currentPage = 0 } = {} } = {}) => currentPage);
    const pagesTotal = useSelector(({ products: { pagesTotal = 1 } = {} } = {}) => pagesTotal);

    const onPressProduct = useCallback(
        product => () => {
            navigation.navigate(routes.PRODUCT_DETAILS, { product });
        },
        [navigation],
    );

    const fetchNextProducts = () => {
        if (currentPage < pagesTotal) {
            dispatch(fetchProducts({ pageParameter: currentPage + 1 }));
        }
    };

    const renderItem = ({ item }) => {
        const {
            cell: { name, price, thumb, description },
            id,
        } = item || {};

        return (
            <TouchableOpacity
                onPress={onPressProduct({ id, cell: { name, price, thumb, description } })}
                key={id}
                style={styles.productItem}>
                <ProductCard title={name} price={price} source={`http:${thumb}`} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.productsList}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                onEndReached={fetchNextProducts}
                onEndReachedThreshold={0.1}
            />
        </View>
    );
};
