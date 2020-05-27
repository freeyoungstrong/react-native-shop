import React, { useCallback } from 'react';
import { Text, TouchableOpacity, Image, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import he from 'he';

import { styles } from './styles';
import { removeProductsFromCart } from 'shared/redux/actions';
import { getData } from 'shared/utils';
import { USER } from 'shared/constants';
import { loc } from 'shared/assets';

export const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const onPressRemoveAll = useCallback(async () => {
        const token = await getData(USER);
        dispatch(removeProductsFromCart(token, true));
    }, [dispatch, USER]);
    const totalPrice = useSelector(({ productsInCart: { total = '' } = {} } = {}) => total);
    const productsInCart = useSelector(({ productsInCart: { products = [] } = {} } = {}) => products).map(
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

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.openDrawer}>
                    <Icon size={35} name="menu" />
                </TouchableOpacity>
                <Text>{loc('cart.title')}</Text>
                <View />
            </View>
            <ScrollView>
                <View style={styles.container}>
                    {productsInCart.length > 0 ? (
                        <>
                            {productsInCart}
                            <View style={styles.footer}>
                                <Text>{loc('cart.price', { totalPrice })}</Text>
                                <TouchableOpacity style={styles.button} onPress={onPressRemoveAll}>
                                    <Text>{loc('cart.button')}</Text>
                                    <Icon size={30} name="delete" />
                                </TouchableOpacity>
                            </View>
                        </>
                    ) : (
                        <Text style={styles.emptyCart}>{loc('cart.empty')}</Text>
                    )}
                </View>
            </ScrollView>
        </>
    );
};
