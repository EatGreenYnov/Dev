import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress'; // Import de la bibliothèque pour la barre de progression

const ProfilepgCard = ({ image, firstName, lastName, progress }) => {
  return (
    <View style={styles.card}>
      {/* Image à gauche */}
      <Image source={image} style={styles.image} />

      {/* Section centrale avec le nom, prénom et la barre de progression */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
        <Progress.Bar 
          progress={progress} 
          width={200} 
          color="#4CAF50" // Couleur de la barre de progression
          unfilledColor="#E0E0E0" // Couleur de l'arrière-plan de la barre
          borderWidth={1} 
          borderColor="#000"
          height={10} 
          style={styles.progressBar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBar: {
    marginTop: 5,
  },
});

export default ProfilepgCard;
