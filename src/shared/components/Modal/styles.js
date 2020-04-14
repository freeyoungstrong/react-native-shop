import { StyleSheet } from 'react-native';

import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonStyle: {
        width: '55%',
        height: 40,
        borderRadius: 10,
        backgroundColor: colors.seaBlue,
        justifyContent: 'center',
    },
    buttonTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Roboto-Bold',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
    },
});
