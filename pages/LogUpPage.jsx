import React from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import styles from "./logUpPageStyles";
import Navbar from "../components/navbar/Navbar";
import FormLogUp from "../components/logUp/FormLogUp";


const LogUpPage = ({navigation}) => {
    return (
        <View style={styles.logUpForm}>
            <Navbar/>
            <ScrollView style={styles.mainScroll}>
                <View style={styles.form}>
                    <View style={styles.titleForm}>
                        <Text style={styles.textTitle}>crie o seu perfil</Text>
                    </View>
                    <FormLogUp/>
                </View>
            </ScrollView>
        </View>
    );
};

export default LogUpPage;