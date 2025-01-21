import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';   
import Route from './route/router'; 
                             


export default function App() {
  return (
      <Route />
  );
}

