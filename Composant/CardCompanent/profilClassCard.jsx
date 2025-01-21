import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileclassCard = ({ image, firstName, lastName, statusText, rank }) => {
  return (
    <View style={styles.card}>
      {/* Rang à gauche */}
      {rank !== undefined && (
        <Text style={styles.rank}>{rank}</Text>
      )}

      {/* Image à gauche */}
      <Image source={image} style={styles.image} />

      {/* Section centrale avec le nom et le texte de statut */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.statusText}>{statusText}</Text>
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
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 15,
    color: '#4CAF50',
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
  statusText: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProfileclassCard;
