import { StyleSheet } from 'react-native';

import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    animation: {
        position: 'absolute',
        bottom: '20%',
    },
    progressCircle: {
        position: 'absolute',
        opacity: 0.3,
    },
});
