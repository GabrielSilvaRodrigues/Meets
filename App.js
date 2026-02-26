import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroductionPage from './pages/IntroductionPage';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
        <IntroductionPage />
        <StatusBar style="auto" /> 
    </View>
  );
}
