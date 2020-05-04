import React from 'react';
import { View, Text, ScrollView, Alert, Image } from 'react-native';
import he from 'he';

import { styles } from './styles';
import { Button, Divider } from 'shared/components';
import { loc } from 'shared/assets';

export const ProductDetails = ({ route }) => {
    const { product } = route.params;
    const onPressButtonWishList = () => {
        Alert.alert(loc('productDetails.buttonWishlist.message'));
    };
    const onPressButtonAddToCart = () => {
        Alert.alert(loc('productDetails.buttonAddToCart.message'));
    };

    return (
        <ScrollView style={styles.wrap}>
            <View style={styles.container}>
                <Image source={{ uri: `http:${product.cell.thumb}` }} style={styles.image} />
                <Text style={styles.nameOfDevice}>{product.cell.name}</Text>
                <Text style={styles.costOfDevice}>{product.cell.price}</Text>
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
                <Text style={styles.description}>{he.decode(product.cell.description)}</Text>
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
