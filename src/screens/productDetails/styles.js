import { StyleSheet } from 'react-native';

import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    container: {
        marginVertical: 5,
        backgroundColor: colors.white,
    },
    image: {
        width: '60%',
        height: 300,
        borderWidth: 1,
        marginHorizontal: '20%',
        marginVertical: '5%',
    },
    nameOfDevice: {
        marginLeft: '5%',
        marginBottom: '2%',
        fontSize: 20,
        fontWeight: '400',
    },
    costOfDevice: {
        marginLeft: '5%',
        marginBottom: '5%',
        fontSize: 18,
        fontWeight: '600',
    },
    buttons: {
        flexDirection: 'row',
    },
    title: {
        margin: 10,
        fontSize: 20,
        fontWeight: '600',
        color: colors.seaBlue,
    },
    description: {
        marginHorizontal: 10,
        fontSize: 17,
        marginBottom: 5,
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
        fontWeight: '100',
        textAlign: 'center',
        color: colors.black,
    },
    buttonWishListStyle: {
        width: '50%',
        height: 40,
        marginVertical: 5,
        borderWidth: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    buttonWishListTitle: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: colors.black,
    },

    buttonAddToCartStyle: {
        width: '50%',
        height: 40,
        marginVertical: 5,
        backgroundColor: colors.seaBlue,
        justifyContent: 'center',
    },
    buttonAddToCartTitle: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: colors.white,
    },
});
