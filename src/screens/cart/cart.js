import React, { useCallback } from 'react';
import { Text, TouchableOpacity, Image, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import he from 'he';

import { styles } from './styles';
import { addProductTocart } from 'shared/redux/actions';
import { getData } from 'shared/utils';
import { USER } from 'shared/constants';

export const CartScreen = () => {
    const dispatch = useDispatch();
    const onPressDeleteAll = useCallback(async () => {
        const token = await getData(USER);
        dispatch(addProductTocart(token, null, null, true));
    }, [dispatch, USER]);
    // const totalPrice = useSelector(({ productsInCart: { total = '' } = {} } = {}) => total);
    const productsInCart = useSelector(({ productsInCart: { products = [] } = {} } = {}) => products).map(
        ({ thumb, name, key, quantity, price }) => (
            <View style={styles.productItem} key={key}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{he.decode(name)}</Text>
                    <Text style={styles.text}>{`Price: ${price}`}</Text>
                    <Text style={styles.text}>{`Quantity: ${quantity}`}</Text>
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
        <ScrollView>
            <View style={styles.container}>
                {productsInCart.length > 0 ? (
                    <>
                        {productsInCart}
                        <View style={styles.footer}>
                            {/* <Text>{`Total price: ${totalPrice}`}</Text> */}
                            <TouchableOpacity style={styles.button} onPress={onPressDeleteAll}>
                                <Text>Delete all</Text>
                                <Icon size={30} name="delete" />
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <Text>Your cart is empty</Text>
                )}
            </View>
        </ScrollView>
    );
};
