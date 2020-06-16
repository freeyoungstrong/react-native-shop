import React, { useCallback } from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import he from 'he';

import { styles } from './styles';
import { removeProductsFromCart } from 'shared/redux/actions';
import { loc } from 'shared/assets';
import { Button } from 'shared/components';

export const CartScreen = () => {
    const dispatch = useDispatch();

    const token = useSelector(({ auth: { token = '' } = {} } = {}) => token);
    const isLoading = useSelector(({ cart: { isLoading = false } = {} } = {}) => isLoading);
    const totalPrice = useSelector(({ cart: { total = '' } = {} } = {}) => total);
    const productsInCart = useSelector(({ cart: { products = [] } = {} } = {}) => products).map(
        ({ thumb, name, key, quantity, price }) => (
            <View style={styles.productItem} key={key}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{he.decode(name)}</Text>
                    <Text style={styles.text}>{loc('cart.product.price', { price })}</Text>
                    <Text style={styles.text}>{loc('cart.product.quantity', { quantity })}</Text>
                </View>
                <Image
                    style={styles.image}
                    source={{
                        uri: `http:${thumb}`,
                    }}
                />
            </View>
        ),
    );

    const onPressRemoveAll = useCallback(() => {
        dispatch(removeProductsFromCart(token, true));
    }, [dispatch, token]);

    return (
        <ScrollView>
            <View style={styles.container}>
                {productsInCart.length > 0 ? (
                    <>
                        {productsInCart}
                        <View style={styles.footer}>
                            <Text>{loc('cart.price', { totalPrice })}</Text>
                            <Button
                                title={loc('cart.button')}
                                onPress={onPressRemoveAll}
                                icon={<Icon name="delete" size={30} />}
                                isLoading={isLoading}
                                type="outline"
                            />
                        </View>
                    </>
                ) : (
                    <Text style={styles.emptyCart}>{loc('cart.empty')}</Text>
                )}
            </View>
        </ScrollView>
    );
};
