import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import styles from './inputDefaultStyles';

const InputDefault = ({ 
    label, 
    placeholder, 
    value, 
    onChangeText, 
    onClear, 
    secureTextEntry = false,
    keyboardType = 'default'
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder={placeholder}
                    placeholderTextColor="#999999"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                />
                {value && value.length > 0 && (
                    <TouchableOpacity style={styles.cancelButton} onPress={onClear}>
                        <Image 
                            style={styles.cancelImage} 
                            source={require("../../assets/cancel.svg")} 
                            contentFit="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default InputDefault;