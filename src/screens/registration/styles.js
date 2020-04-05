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
    moveToSignIn: {
        color: '#4f73f9',
        fontSize: 20,
    },
    buttonStyle: {
        width: '85%',
        height: 40,
        marginVertical: 20,
        backgroundColor: '#118cbf',
        justifyContent: 'center',
    },
    buttonTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
    },
});
