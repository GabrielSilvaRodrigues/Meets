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
      paddingHorizontal: 20,      // Respiro lateral do formulário
      paddingBottom: 40,          // Espaço extra no fim para não colar no rodapé
  },
  titleForm: {
      marginTop: 30,              // Distância da Navbar
      marginBottom: 20,           // Distância para o início do Form
      alignItems: 'flex-start',   // Alinha o título à esquerda (HUG horizontal)
  },
  textTitle: {
      fontSize: 28,               // Tamanho de destaque
      fontWeight: 'bold',
      color: '#9c2222',           // Mantendo sua paleta de cores
      textTransform: 'capitalize', // Transforma "crie o seu perfil"
  }
});

export default styles;