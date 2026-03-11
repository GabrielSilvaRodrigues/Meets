import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
        fontWeight: '600',
    },
    inputWrapper: {
        flexDirection: 'row', // Lado a lado (Input + Botão)
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 10,
        height: 50, // Altura fixa para todos os inputs
    },
    textInput: {
        flex: 1, // FILL: Ocupa todo o espaço disponível
        height: '100%',
        fontSize: 16,
        color: '#000',
    },
    cancelButton: {
        padding: 5,
        marginLeft: 5,
    },
    cancelImage: {
        width: 20,
        aspectRatio: 1,
    }
});
export default styles;