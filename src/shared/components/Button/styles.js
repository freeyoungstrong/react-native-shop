import { StyleSheet } from 'react-native';

import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
    button: {
        height: 40,
        marginVertical: 20,
        borderRadius: 10,
        borderColor: colors.black,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
    },
});
