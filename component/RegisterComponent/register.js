import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet , TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate } from 'react-router-native';

const RegisterScreen = ({ navigation }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setMail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [message, setMessage] = useState('');

  navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, prenom, mail, mot_de_passe: motDePasse })
      });

      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem('token', data.token);
        setMessage('Inscription réussie');
        navigate('Login');
      } else {
        setMessage(data.message || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      setMessage('Erreur de connexion au serveur');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput 
        placeholder="Nom" 
        value={nom} 
        onChangeText={setNom} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Prénom" 
        value={prenom} 
        onChangeText={setPrenom} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="E-mail" 
        value={mail} 
        onChangeText={setMail} 
        keyboardType="email-address" 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Mot de passe" 
        value={motDePasse} 
        onChangeText={setMotDePasse} 
        secureTextEntry 
        style={styles.input} 
      />
      <Button title="S'inscrire" onPress={handleRegister} />
      {message ? <Text style={styles.message}>{message}</Text> : null}

      <TouchableOpacity onPress={() => navigate('/login')}>
        <Text style={styles.link}>Déjà un compte ? Connectez-vous</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  message: {
    marginTop: 10,
    color: 'red',
    textAlign: 'center'
  }
});
