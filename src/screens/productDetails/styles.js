import { StyleSheet } from 'react-native';

import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
    container: {
        backgroundColor: colors.white,
    },
    image: {
        width: '60%',
        height: 300,
        marginHorizontal: '20%',
        marginVertical: '5%',
    },
    nameOfDevice: {
        marginLeft: '5%',
        marginBottom: '2%',
        fontSize: 20,
        fontFamily: 'Roboto-Regular',
    },
    costOfDevice: {
        marginLeft: '5%',
        marginBottom: '5%',
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
    },
    buttons: {
        flexDirection: 'row',
    },
    title: {
        margin: 10,
        fontSize: 20,
        color: colors.seaBlue,
        fontFamily: 'Roboto-Bold',
    },
    description: {
        marginHorizontal: 10,
    },
    buttonColorOfDeviceStyle: {
        width: '20%',
        height: 30,
        margin: 10,
        backgroundColor: colors.gray,
        justifyContent: 'center',
    },
    buttonColorOfDeviceTitle: {
        fontSize: 18,
        fontFamily: 'Roboto-Thin',
        textAlign: 'center',
        color: colors.black,
    },
    buttonWishListStyle: {
        width: '50%',
        height: 40,
        marginTop: 5,
        borderWidth: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    buttonWishListTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.black,
        fontFamily: 'Roboto-Regular',
    },
    buttonAddToCartStyle: {
        width: '50%',
        height: 40,
        marginTop: 5,
        backgroundColor: colors.seaBlue,
        justifyContent: 'center',
    },
    buttonAddToCartTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Roboto-Bold',
    },
    p: {
        fontSize: 17,
        fontFamily: 'Roboto-Regular',
    },
});
