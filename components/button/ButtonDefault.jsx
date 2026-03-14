import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './buttonDefaultStyles';

const ButtonDefault = ({ label, goTo }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.logUpButton} 
                onPress={() => navigation.navigate(goTo)}>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ButtonDefault;
