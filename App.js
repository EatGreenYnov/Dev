import { StatusBar } from 'expo-status-bar';
import Platform from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Page_Defi from './View/Page_defi/Page_Defi';
import Page_Classement from './View/Page_classement/Page_Classement';
import CardComponent from './Composant/CardCompanent/CardComponent';  
import Navbar from './Composant/Navbar/Navbar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Accueil = () => (
  <View style={styles.screen}>
    <Navbar />
    <Text>Bienvenue sur la page d'accueil de l'application EatGreenYnov!</Text>
    
    
  </View>
);




const Stack = createNativeStackNavigator();

export default function App() {
  if (Platform.OS === 'web') {
    console.log('web');
    return (
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Accueil">
      <Stack.Screen name="Accueil" component={Accueil} />
      <Stack.Screen name="DEFI" component={Page_Defi} />
      <Stack.Screen name="Classement" component={Page_Classement} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 20,
  },
});
