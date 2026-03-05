import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./introductionPageStyles";
import { Image } from "expo-image";

const IntroductionPage = ({ navigation }) => {
    return (
        <View style={styles.main}>
          <View style={styles.elementoEstatico}>
            <Image source={require("../assets/logo.svg")} style={styles.logoImagem}/>
            <Text style={styles.suptituloTexto}>Sua rede social de eventos acadêmicos!</Text>
          </View>
          <View style={styles.elementoAcao}>
            <View style={styles.botaoEntrar}>
                <TouchableOpacity style={styles.formatoBotao} onPress={()=>navigation.navigate('LogIn')}>
                    <Text style={styles.entrarTexto}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.ouTexto}>ou</Text>
            <View style={styles.botaoCadastrar}>
                <TouchableOpacity style={styles.formatoBotao2} onPress={()=>navigation.navigate('LogUp')}>
                    <Text style={styles.cadastrarTexto}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
    );
}

export default IntroductionPage;