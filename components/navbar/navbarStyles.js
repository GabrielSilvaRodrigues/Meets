import {StyleSheet} from 'react-native';


const styles = (insets) => StyleSheet.create({
    navbar: {
        width: '100%',             // LARGURA: FILL
        flexDirection: 'row',      // Itens lado a lado
        alignItems: 'center',      // Centraliza ícones verticalmente
        justifyContent: 'space-between', // Espalha os ícones (Voltar na esquerda, Info na direita)
        backgroundColor: '#9c2222',
        paddingTop: 10 + insets,            // Espaço para a barra de status do celular
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    backImage: {
        height: 40,
        aspectRatio: 1,
    },
    logoImage: {
        height: 40,
        aspectRatio: 270/66,
    },
    infoImage: {
        width: 40,
        aspectRatio: 1,
    }
});
export default styles