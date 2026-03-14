import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import InputDefault from "../input/InputDefault";
import styles from "./formLogUpStyles";
import Adicionals from "./adicionals/Adicionals";

const FormLogUp = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [cep, setCep] = useState("");

    return (
        <View style={styles.formLogUp}>
            <View style={styles.imageField}>
                <Text style={styles.inputText}>Imagem:</Text>
                <TouchableOpacity style={styles.buttonSaveWrapper}> 
                    <Image style={styles.buttonsave} source={require("../../assets/arquivo.svg")} />
                    <Text style={styles.nometexto}>Upload</Text>
                </TouchableOpacity>
            </View>
            <InputDefault 
                label="Nome:"
                placeholder="Primeiro Nome Último Nome"
                value={name}
                onChangeText={setName}
                onClear={() => setName("")}
            />

            <InputDefault 
                label="E-mail:"
                placeholder="exemplo@email.com"
                value={email}
                onChangeText={setEmail}
                onClear={() => setEmail("")}
                keyboardType="email-address"
            />

            <InputDefault 
                label="Senha:"
                placeholder="**********"
                value={password}
                onChangeText={setPassword}
                onClear={() => setPassword("")}
                secureTextEntry={true}
            />
            
            <InputDefault 
                label="Confirmar senha:"
                placeholder="**********"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onClear={() => setConfirmPassword("")}
                secureTextEntry={true}
            />

            <InputDefault 
                label="Código postal:"
                placeholder="01234-567"
                value={cep}
                onChangeText={setCep}
                onClear={() => setCep("")}
                keyboardType="numeric"
            />
            <View style={styles.fieldButtonSubmit}>
                <TouchableOpacity style={styles.buttonSubmit}>
                    <Text style={styles.submitText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.adicionals}>
                <View style={styles.linkLogIn}>
                    <TouchableOpacity style={styles.LinkForm} onPress={() => navigation.navigate("LogIn")}>
                        <Text style={styles.linkText}>Já possui conta?</Text>
                    </TouchableOpacity>
                </View>
                <Adicionals/>
            </View>
        </View>
    );
}

export default FormLogUp;
