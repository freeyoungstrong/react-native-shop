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
    },
    title: {
        fontSize: 40,
        marginHorizontal: 60,
        textAlign: 'center',
        marginBottom: 60,
        color: colors.seaBlue,
        fontFamily: 'Roboto-Regular',
    },
    navQuestion: {
        alignSelf: 'flex-end',
        right: '7.5%',
    },
});
