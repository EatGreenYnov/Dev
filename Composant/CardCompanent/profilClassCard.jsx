import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileClassCard = ({ image, firstName, lastName, Classement }) => {
  return (
    <View style={styles.card}>
      {/* Image à gauche */}
      <Image source={image} style={styles.image} />

      {/* Section centrale avec le nom, prénom et le texte personnalisé */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>

        {/* Affichage du texte personnalisé */}
        <Text style={styles.customText}>
          {Classement}
        </Text>
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
  customText: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProfileClassCard;
