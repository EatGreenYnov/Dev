import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page_Defi from './View/Page_defi/Page_Defi';
import CardComponent from './Composant/CardCompanent/CardComponent';  
import Navbar from './Composant/Navbar/Navbar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';   
import Route from './route/router'; 
import Page_Defi from './View/Page_defi/Page_Defi';
import Navbar from './Composant/Navbar/Navbar';
import { StyleSheet, View, Text } from 'react-native';

const Accueil = () => (
  <View style={styles.screen}>
    <Navbar />
    <Text>Bienvenue sur la page d'accueil !</Text>
  </View>
);

const Boissons = () => (
  <View style={styles.screen}>
    <Navbar />
    <Text>Page Boissons</Text>
  </View>
);

const Plats = () => (
  <View style={styles.screen}>
    <Navbar />
    <Text>Page Plats</Text>
  </View>
);

const Poissonnerie = () => (
  <View style={styles.screen}>
    <Navbar />
    <Text>Page Poissonnerie</Text>
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
      <Stack.Screen name="Boissons" component={Boissons} />
      <Stack.Screen name="Plats" component={Plats} />
      <Stack.Screen name="Poissonnerie" component={Poissonnerie} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
