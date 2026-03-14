import { StyleSheet, Dimensions } from "react-native";

// Pega a largura da tela do dispositivo para os cálculos de posicionamento
const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
      flex: 1,
      backgroundColor: '#9c2222',
      justifyContent: 'center', // Centraliza o conteúdo na tela
      paddingHorizontal: 30,
  },
  staticContent: {
      alignItems: 'center',
      marginBottom: 50,
  },
  logoImage: {
      height: 100,
      aspectRatio: 270/66,
  },
  subtitleText: {
      fontSize: 16,
      color: '#ffffff',
      textAlign: 'center',
      marginTop: 10,
  },
  actionArea: {
      width: '100%',
      alignItems: 'center',
  },
  orText: {
      marginVertical: 10,
      color: '#ffffff',
      fontSize: 14,
      fontWeight: '600',
  }
});

export default styles;
