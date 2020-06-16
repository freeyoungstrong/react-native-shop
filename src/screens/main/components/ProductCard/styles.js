import { StyleSheet } from 'react-native';
import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 210,
        borderRadius: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: colors.white,
    },
    image: {
        width: 100,
        height: 100,
    },
    info: {
        alignItems: 'flex-start',
        margin: 10,
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
    },
    price: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
    },
});
