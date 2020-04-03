import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'grey',
    },
    container: {
        marginVertical: 5,
        backgroundColor: 'white',
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
        color: '#118cbf',
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
        backgroundColor: 'grey',
        justifyContent: 'center',
    },
    buttonColorOfDeviceTitle: {
        fontSize: 18,
        fontWeight: '100',
        textAlign: 'center',
        color: 'black',
    },
    buttonWishListStyle: {
        width: '50%',
        height: 40,
        marginVertical: 5,
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    buttonWishListTitle: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: 'black',
    },

    buttonAddToCartStyle: {
        width: '50%',
        height: 40,
        marginVertical: 5,
        backgroundColor: '#118cbf',
        justifyContent: 'center',
    },
    buttonAddToCartTitle: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
    },
});
