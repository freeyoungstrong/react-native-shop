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
    title: {
        fontSize: 40,
        fontWeight: '500',
        marginHorizontal: 60,
        textAlign: 'center',
        marginBottom: 60,
        color: colors.seaBlue,
    },
    moveToSignIn: {
        color: colors.blue,
        fontSize: 20,
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
        fontWeight: '600',
        textAlign: 'center',
        color: colors.white,
    },
});
