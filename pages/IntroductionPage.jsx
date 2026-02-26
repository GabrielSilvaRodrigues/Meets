import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./introductionPageStyles";

const IntroductionPage = () => {
    return (
        <>
            <View style={styles.main}>
              <View style={styles.elementoEstatico}>
                <Text style={styles.suptituloTexto}>Sua rede social de eventos acadêmicos!</Text>
                <Image style={styles.logoImagem} source={require("../assets/LogoMeets.png")} />
              </View>
              <View style={styles.elementoAcao}>
                <View style={styles.botaoEntrar}>
                    <View style={styles.formatoBotao}></View>
                    <Text style={styles.entrarTexto}>Entrar</Text>
                </View>
                <Text style={styles.ouTexto}>ou</Text>
                <View style={styles.botaoCadastrar}>
                    <View style={styles.formatoBotao2}></View>
                    <Text style={styles.cadastrarTexto}>Cadastre-se</Text>
                </View>
              </View>
            </View>
        </>
    );
}

export default IntroductionPage;