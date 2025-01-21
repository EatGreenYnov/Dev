import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page_Defi from './View/Page_defi/Page_Defi';
import CardComponent from './Composant/CardCompanent/CardComponent';  
import Navbar from './Composant/Navbar/Navbar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Composants pour les écrans
const Accueil = ({ navigation }) => (
  <View style={styles.screen}>
    <Navbar />
    <Text>Bienvenue sur la page d'accueil !</Text>
    {/* <Button title="Aller à Contact" onPress={() => navigation.navigate('Contact')} /> */}
  </View>
);

// const Contact = () => (
//   <View style={styles.screen}>
//       <Navbar />
//     <Text>Page Contact</Text>
//   </View>
// );

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
  return (
    // <View style={styles.container}>
    //   <Page_Defi />
    //   {/* <CardComponent lefttext="a"  righttext="a" ></CardComponent> */}
    //   <StatusBar style="auto" />
    // </View>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
