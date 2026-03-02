import IntroductionPage from './pages/IntroductionPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Initial'>
        <Stack.Screen name="Initial" component={IntroductionPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
