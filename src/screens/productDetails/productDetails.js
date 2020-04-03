import React from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button/button';
import { loc } from '../../assets/locales';

const product = {
    id: '1',
    title: 'Xiaomi',
    cost: '225',
    description: 'some decription about this phone',
};

export const ProductDetails = () => {
    const onPressButtonWishList = () => {
        Alert.alert(loc('productDetails.buttonWishlist.message'));
    };
    const onPressButtonAddToCart = () => {
        Alert.alert(loc('productDetails.buttonAddToCart.message'));
    };
    return (
        <ScrollView style={styles.wrap}>
            <View style={styles.container}>
                <View style={styles.image} />
                <Text style={styles.nameOfDevice}>{product.title}</Text>
                <Text style={styles.costOfDevice}>{product.cost}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{loc('productDetails.selectColor')}</Text>
                <Button
                    title="Blue"
                    buttonStyle={styles.buttonColorOfDeviceStyle}
                    buttonStyleTitle={styles.buttonColorOfDeviceTitle}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{loc('productDetails.description')}</Text>
                <Text style={styles.description}>{product.description}</Text>
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
