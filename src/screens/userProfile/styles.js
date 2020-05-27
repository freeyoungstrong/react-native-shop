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
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 40,
    },
});
