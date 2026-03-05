import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./logInPageStyles";
import { Image } from "expo-image";

const LogInPage = ({ navigation }) => {
    return (
        <>
            <View style={styles.main}>
              <View style={styles.elementoEstatico}>
                <Image source={require("../assets/logo.svg")} style={styles.logoImagem}/>
                <Text style={styles.suptituloTexto}>Sua rede social de eventos acadêmicos!</Text>
              </View>
              <View style={styles.elementoAcao}>
                <View style={styles.botaoEntrar}>
                    <View style={styles.formatoBotao}></View>
                    <Button title="Entrar" onPress={()=>navigation.navigate('Initial')} style={styles.entrarTexto}/>
                </View>
                <Text style={styles.ouTexto}>ou</Text>
                <View style={styles.botaoCadastrar}>
                    <View style={styles.formatoBotao2}></View>
                    <Button title="Cadastrar" onPress={()=>navigation.navigate('LogUp')} style={styles.cadastrarTexto}/>
                </View>
              </View>
            </View>
        </>
    );
}

export default LogInPage;