import { StyleSheet } from 'react-native';

import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
    buttonStyle: {
        width: '85%',
        height: 40,
        marginVertical: 20,
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
});
