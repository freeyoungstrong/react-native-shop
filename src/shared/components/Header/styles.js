import { StyleSheet } from 'react-native';
import { colors } from 'shared/assets';

export const styles = StyleSheet.create({
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
    title: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Roboto-Bold',
    },
});
