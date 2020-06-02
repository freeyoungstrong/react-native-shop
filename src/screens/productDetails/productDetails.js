import React, { useCallback } from 'react';
import { View, Text, ScrollView, Alert, Image } from 'react-native';
import he from 'he';
import ToastModule from 'react-native-toast-module';
import PushNotification from 'react-native-push-notification';
import { useDispatch, useSelector } from 'react-redux';
import HTMLView from 'react-native-htmlview';

import { styles } from './styles';
import { Button, Divider } from 'shared/components';
import { loc } from 'shared/assets';
import { addProductTocart } from 'shared/redux/actions';

export const ProductDetails = ({ route }) => {
    const { product } = route.params;
    const {
        cell: { name, price, thumb, description },
        id,
    } = product;
    const dispatch = useDispatch();
    const token = useSelector(({ auth: { token = '' } = {} } = {}) => token);

    const onPressButtonWishList = useCallback(() => {
        Alert.alert(loc('productDetails.buttonWishlist.message'));
    }, []);

    const onPressButtonAddToCart = useCallback(() => {
        const quantity = 1;
        dispatch(addProductTocart(token, id, quantity));
        ToastModule.show('Product added');
        PushNotification.localNotification({
            /* Android Only Properties */
            largeIcon: 'ic_launcher_round',
            bigText: name,
            vibrate: false,

            /* iOS and Android properties */
            title: 'Your product added to cart',
            message: name,
            playSound: true,
            soundName: 'default',
        });
    }, [dispatch, id, token]);

    return (
        <ScrollView style={styles.wrap}>
            <View style={styles.container}>
                <Image source={{ uri: `http:${thumb}` }} style={styles.image} />
                <Text style={styles.nameOfDevice}>{name}</Text>
                <Text style={styles.costOfDevice}>{price}</Text>
            </View>
            <Divider />
            <View style={styles.container}>
                <Text style={styles.title}>{loc('productDetails.selectColor')}</Text>
                <Button
                    title="Blue"
                    buttonStyle={styles.buttonColorOfDeviceStyle}
                    buttonStyleTitle={styles.buttonColorOfDeviceTitle}
                />
            </View>
            <Divider />
            <View style={styles.container}>
                <Text style={styles.title}>{loc('productDetails.description')}</Text>
                <View style={styles.description}>
                    <HTMLView value={he.decode(description)} stylesheet={styles} />
                </View>
            </View>
            <View style={styles.buttons}>
                <Button
                    title={loc('productDetails.buttonWishlist.title')}
                    onPress={onPressButtonWishList}
                    buttonStyle={styles.buttonWishListStyle}
                    buttonStyleTitle={styles.buttonWishListTitle}
                />
                <Button
                    title={loc('productDetails.buttonAddToCart.title')}
                    onPress={onPressButtonAddToCart}
                    buttonStyle={styles.buttonAddToCartStyle}
                    buttonStyleTitle={styles.buttonAddToCartTitle}
                />
            </View>
        </ScrollView>
    );
};
