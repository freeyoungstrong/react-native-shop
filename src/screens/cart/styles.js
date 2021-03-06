import { StyleSheet } from 'react-native';

import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
    },
    textContainer: {
        width: '80%',
    },
    text: {
        paddingVertical: 5,
        fontFamily: 'Roboto-Regular',
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        width: '90%',
        height: 100,
        shadowColor: colors.black,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: colors.white,
        paddingLeft: 5,
        marginVertical: 10,
    },
    footer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    emptyCart: {
        marginTop: 20,
    },
});
