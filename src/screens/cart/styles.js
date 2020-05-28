import { StyleSheet } from 'react-native';
import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 100,
        paddingHorizontal: '4%',
        paddingTop: 35,
        backgroundColor: colors.lightBlue,
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
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 10,
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
