import React from 'react';
import styles from './adicionalsStyles';
import {View, TouchableOpacity, Image} from 'react-native';

const Adicionals = () => {
    return (
        <View style={styles.fieldOauth2}>
            <TouchableOpacity style={styles.microsoftButton}>
                <Image style={styles.microsoftImage} source={require("../../../assets/microsoft.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
                <Image style={styles.googleImage} source={require("../../../assets/google.png")} />
            </TouchableOpacity>
        </View>
    );
}
export default Adicionals;