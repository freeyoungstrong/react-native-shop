import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3cad8',
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
        marginHorizontal: 60,
        textAlign: 'center',
        marginBottom: 60,
        color: '#00a8f3',
    },
    navQuestion: {
        alignSelf: 'flex-end',
        right: '7.5%',
    },
});
