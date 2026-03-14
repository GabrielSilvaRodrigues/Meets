import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
     container: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    logUpButton: {
        backgroundColor: '#ffffff',
        borderColor: '#9c2222',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center', // Centraliza o texto verticalmente (Hug)
        alignItems: 'center',     // Centraliza o texto horizontalmente
    },
    label: {
        color: '#9c2222',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
export default styles;