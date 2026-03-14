import React from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import ButtonDefault from "../components/button/ButtonDefault"; // Certifique-se que o caminho está correto
import styles from "./introductionPageStyles";

const IntroductionPage = () => {
    return (
        <View style={styles.main}>
            <View style={styles.staticContent}>
                <Image 
                    source={require("../assets/logo.svg")} 
                    style={styles.logoImage}
                    contentFit="contain" 
                />
                <Text style={styles.subtitleText}>
                    Sua rede social de eventos acadêmicos!
                </Text>
            </View>
            <View style={styles.actionArea}>
                <ButtonDefault 
                    label="Entrar" 
                    goTo="LogIn" 
                />

                <Text style={styles.orText}>ou</Text>

                <ButtonDefault 
                    label="Cadastrar-se" 
                    goTo="LogUp" 
                />
            </View>
        </View>
    );
}

export default IntroductionPage;