import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./logUpPageStyles";
import { Image } from "expo-image";

const LogUpPage = ({ navigation }) => {
    return (
        <View style={styles.logupForm}>
            <View style={styles.navbar}>
                <TouchableOpacity >
                    <Image style={styles.backButton} source={require("../assets/back.svg")} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.logo} source={require("../assets/logo.svg")} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.helpButton} source={require("../assets/ajuda.svg")} />
                </TouchableOpacity>
            </View>

            <View style={styles.conteudo}>
                <View style={styles.tituloconteudo}>
                    <Text style={styles.subtitulotexto}>crie o seu perfil</Text>
                </View>

                <View style={styles.formulariocadastrar}>
                    <View style={styles.imageField}>
                        <Text style={styles.imagemtexto}>Imagem:</Text>
                        <Image style={styles.buttonsave} source={require("../assets/arquivo.svg")} />
                        <Text style={styles.nometexto}>Upload</Text>
                    </View>

                    <View style={styles.camponome}>
                        <Text style={styles.nometexto2}>Nome:</Text>
                        <TextInput style={styles.nomeinput} placeholder="Primeiro Nome Ultimo Nome" />
                        <TouchableOpacity>
                            <Image style={styles.cancelarbotao} source={require("../assets/cancelarBotao.svg")} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.campoemail}>
                        <Text style={styles.emailtexto}>E-mail:</Text>
                        <View style={styles.emailinput}>
                            <Text style={styles.emailtexto2}>exemplo@escola.gov.br</Text>
                            <Image style={styles.cancelarbotao} source={require("../assets/cancelarBotao.svg")} />
                        </View>
                    </View>

                    <View style={styles.camposenha}>
                        <Text style={styles.senhatexto}>Senha:</Text>
                        <View style={styles.senhainput}>
                            <Text style={styles.senhatexto2}>***********</Text>
                            <Image style={styles.cancelarbotao} source={require("../assets/cancelarBotao.svg")} />
                        </View>
                    </View>

                    <View style={styles.campoconfirmar}>
                        <Text style={styles.senhatexto3}>Confirmar Senha:</Text>
                        <View style={styles.senhainput}>
                            <Text style={styles.senhatexto2}>***********</Text>
                            <Image style={styles.cancelarbotao} source={require("../assets/cancelarBotao.svg")} />
                        </View>
                    </View>

                    <View style={styles.campocep}>
                        <Text style={styles.senhatexto4}>Código Postal:</Text>
                        <View style={styles.senhainput}>
                            <Text style={styles.senhatexto2}>01234-567</Text>
                            <Image style={styles.cancelarbotao} source={require("../assets/cancelarBotao.svg")} />
                        </View>
                    </View>

                    <View style={styles.botaoAcao}>
                        <TouchableOpacity style={styles.botaoCadastrar}>
                            <View style={styles.formatoBotao} />
                            <Text style={styles.cadastrarTexto}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.adicionais}>
                        <View style={styles.linkEntrar}>
                            <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
                                <Text style={styles.linkTexto}>Já possui conta?</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.oauth2}>
                            <View style={styles.botaomicrosoft}>
                                <Image style={styles.microsofticone} source={require("../assets/microsoft.png")} />
                            </View>
                            <View style={styles.botaogoogle}>
                                <Image style={styles.googleicone} source={require("../assets/google.png")} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LogUpPage;