import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Pour naviguer entre les écrans

function Navbar() {
  const navigation = useNavigation(); // Hook pour gérer la navigation

  return (
    <View style={styles.navbar}>
      {/* <Image source={require('../../assets/logo/chantallogo.jpg')} style={styles.logo} /> */}
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
          <Text style={styles.link}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Plats')}>
          <Text style={styles.link}>Plats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Boissons')}>
          <Text style={styles.link}>Boissons</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DEFI')}>
          <Text style={styles.link}>DEFI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
      width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default Navbar;
