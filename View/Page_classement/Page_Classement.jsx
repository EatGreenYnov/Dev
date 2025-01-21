import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import avatar from '../../assets/ishigami_senku_18427.png'; // Assurez-vous que le chemin est correct

export default function Page_Classement() {
  // Exemple de données de classement
  const classementData = [
    { firstName: 'John', lastName: 'Doe', points: 1200, ranking: '1er' },
    { firstName: 'Jane', lastName: 'Smith', points: 1100, ranking: '2ème' },
    { firstName: 'Alan', lastName: 'Turing', points: 900, ranking: '3ème' },
    { firstName: 'Ada', lastName: 'Lovelace', points: 850, ranking: '4ème' },
    { firstName: 'Grace', lastName: 'Hopper', points: 800, ranking: '5ème' },
    { firstName: 'Charles', lastName: 'Babbage', points: 780, ranking: '6ème' },
    { firstName: 'Marie', lastName: 'Curie', points: 750, ranking: '7ème' },
    { firstName: 'Nikola', lastName: 'Tesla', points: 700, ranking: '8ème' },
  ];

  return (
    <View style={styles.container}>
      {/* Affichage du profil en haut */}
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileRanking}>Classement : 1er</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <img src={avatar} alt="Profile" style={styles.profileImage} />
        </View>
      </View>

      {/* Titre de la section du classement */}
      <Text style={styles.classementTitle}>Classement Général</Text>

      {/* Liste des classements */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {classementData.map((person, index) => (
          <View key={index} style={styles.classementCard}>
            <Text style={styles.classementText}>{person.ranking}</Text>
            <Text style={styles.classementText}>{person.firstName} {person.lastName}</Text>
            <Text style={styles.classementText}>{person.points} points</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileRanking: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  profileImageContainer: {
    marginLeft: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  classementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  classementCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  classementText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
