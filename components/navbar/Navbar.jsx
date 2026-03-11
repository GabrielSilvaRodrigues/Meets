import React from "react";
import {View, TouchableOpacity} from 'react-native';
import { Image } from "expo-image";
import createStyles from "./navbarStyles";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Navbar = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const styles = createStyles(insets.top);
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                <Image style={styles.backImage} source={require("../../assets/back.svg")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoButton} onPress={()=>navigation.goBack()}>
                <Image style={styles.logoImage} source={require("../../assets/logo.svg")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton} onPress={()=>navigation.goBack()}>
                <Image style={styles.infoImage} source={require("../../assets/info.svg")} />
            </TouchableOpacity>
        </View>
    );
}
export default Navbar;