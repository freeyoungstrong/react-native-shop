import { StyleSheet } from 'react-native';

import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.pink,
    },
    buttonStyle: {
        width: '85%',
        height: 40,
        marginVertical: 20,
        backgroundColor: colors.seaBlue,
        justifyContent: 'center',
    },
    buttonTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Roboto-Bold',
    },
});
