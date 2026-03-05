import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./logUpPageStyles";
import { Image } from "expo-image";

const LogUpPage = ({ navigation }) => {
    return (
        <View style={styles.logupForm}>
            <View style={styles.navbar}>
                <Image style={styles.backButton} source={{ uri: "back.svg" }} />
                <Image style={styles.logo} source={{ uri: "logo0.svg" }} />
                <Image style={styles.helpButton} source={{ uri: "help-button0.svg" }} />
            </View>
            <View style={styles.content}>
                <View style={styles.title}>
                    <Text style={styles.subtitle}>crie o seu perfil</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.imageField}>
                        <Text style={styles.imageLabel}>Imagem:</Text>
                        <Image style={styles.saveButton} source={{ uri: "button-save0.svg" }} />
                        <Text style={styles.uploadLabel}>Upload</Text>
                    </View>
                    <View style={styles.nameField}>
                        <Text style={styles.nameLabel}>Nome:</Text>
                        <View style={styles.nameInput}>
                            <Text style={styles.nameText}>FirstName LastName</Text>
                            <Image style={styles.cancelButton} source={{ uri: "cancelar-botao0.svg" }} />
                        </View>
                    </View>
                    <View style={styles.emailField}>
                        <Text style={styles.emailLabel}>E-mail:</Text>
                        <View style={styles.emailInput}>
                            <Text style={styles.emailText}>exemplo@escola.gov.br</Text>
                            <Image style={styles.cancelButton} source={{ uri: "cancelar-botao1.svg" }} />
                        </View>
                    </View>
                    <View style={styles.passwordField}>
                        <Text style={styles.passwordLabel}>Senha:</Text>
                        <View style={styles.passwordInput}>
                            <Text style={styles.passwordText}>***********</Text>
                            <Image style={styles.cancelButton} source={{ uri: "cancelar-botao2.svg" }} />
                        </View>
                    </View>
                    <View style={styles.passwordField}>
                        <Text style={styles.passwordLabel}>Confirmar Senha:</Text>
                        <View style={styles.passwordInput}>
                            <Text style={styles.passwordText}>***********</Text>
                            <Image style={styles.cancelButton} source={{ uri: "cancelarBotao.svg" }} />
                        </View>
                    </View>
                    <View style={styles.passwordField}>
                        <Text style={styles.passwordLabel}>Confirmar Senha:</Text>
                        <View style={styles.passwordInput}>
                            <Text style={styles.passwordText}>***********</Text>
                            <Image style={styles.cancelButton} source={{ uri: "cancelar-botao3.svg" }} />
                        </View>
                    </View>
                    <View style={styles.passwordField}>
                        <Text style={styles.passwordLabel}>Confirmar Senha:</Text>
                        <View style={styles.passwordInput}>
                            <Text style={styles.passwordText}>***********</Text>
                            <Image style={styles.cancelButton} source={{ uri: "cancelar-botao4.svg" }} />
                        </View>
                    </View>
                    <View style={styles.cepField}>
                        <Text style={styles.cepLabel}>Código Postal:</Text>
                        <View style={styles.cepInput}>
                            <Text style={styles.cepText}>01234-567</Text>
                            <Image style={styles.cancelButton} source={{ uri: "cancelar-botao5.svg" }} />
                        </View>
                    </View>
                    <View style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Cadastrar</Text>
                    </View>
                <View style={styles.adicionais}>
                    <View style={styles.linkEntrar}>
                        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                            <Text style={styles.linkTexto}>Já possui conta?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.oauth2}>
                        <View style={styles.botaoMicrosoft}>
                            <Image style={styles.microsoftIcon} source={{ uri: "microsoft.png" }} />
                        </View>
                        <View style={styles.botaoGoogle}>
                            <Image style={styles.googleIcon} source={{ uri: "google.png" }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>
    );
}

export default LogUpPage;