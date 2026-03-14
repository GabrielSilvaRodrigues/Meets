import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logUpForm: {
      flex: 1,                    // FILL: Ocupa a tela inteira
      backgroundColor: '#FFFFFF', // Cor de fundo da página
  },
  mainScroll: {
      flex: 1,                    // Permite que o scroll ocupe o resto da tela
  },
  form: {
      width: '100%',             // Garante que o conteúdo use a largura disponível
      paddingHorizontal: 20,
      paddingBottom: 40,
  },
  titleForm: {
      marginTop: 30,
      marginBottom: 20,
      alignItems: 'center',      // <--- CENTRALIZA O HUG (O contêiner do texto)
      justifyContent: 'center',
  },
  textTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#9c2222',
      textAlign: 'center',       // <--- CENTRALIZA O TEXTO (Caso quebre linha)
  }
});

export default styles;