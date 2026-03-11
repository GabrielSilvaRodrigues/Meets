import IntroductionPage from './pages/IntroductionPage';
import LogUpPage from './pages/LogUpPage';
import LogInPage from './pages/LogInPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Initial'>
          <Stack.Screen name="Initial" component={IntroductionPage} options={{headerShown: false}}/>
          <Stack.Screen name="LogUp" component={LogUpPage} options={{headerShown: false}}/>
          <Stack.Screen name="LogIn" component={LogInPage} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}
