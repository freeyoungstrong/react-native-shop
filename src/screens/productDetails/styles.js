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
    p: {
        fontSize: 17,
        fontFamily: 'Roboto-Regular',
    },
});
