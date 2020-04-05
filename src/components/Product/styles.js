import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 180,
        margin: 10,
        borderWidth: 1,
        justifyContent: 'flex-end',
    },
    image: {
        width: '90%',
        height: '60%',
        borderWidth: 1,
        marginHorizontal: '5%',
    },
    info: {
        alignItems: 'flex-start',
        margin: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center',
    },
    cost: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
});
