import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import ProfileclassCard from '../../Composant/CardCompanent/profilClassCard';
import avatar from '../../assets/ishigami_senku_18427.png';
import Navbar from '../../Composant/Navbar/Navbar';

export default function Page_Classement() {
  // Données pour "Votre classement"
  const yourRanking = {
    firstName: 'John',
    lastName: 'Doe',
    statusText: '100 points',
    image: avatar,
  };

  // Données pour le classement global
  const globalRankingData = [
    { id: 1, firstName: 'John', lastName: 'Doe', points: 100 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', points: 90 },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', points: 85 },
    { id: 4, firstName: 'Bob', lastName: 'Brown', points: 80 },
    { id: 5, firstName: 'Charlie', lastName: 'Miller', points: 75 },
    { id: 6, firstName: 'Diana', lastName: 'White', points: 70 },
    { id: 7, firstName: 'Eve', lastName: 'Davis', points: 65 },
    { id: 8, firstName: 'Frank', lastName: 'Thomas', points: 60 },
    { id: 9, firstName: 'Grace', lastName: 'Lee', points: 55 },
    { id: 10, firstName: 'Hank', lastName: 'Taylor', points: 50 },
  ];

  return (
  
    <View style={styles.container}>
      <Navbar />
      {/* Section "Votre classement" */}
      <Text style={styles.sectionTitle}>Votre classement</Text>
      <View style={styles.yourRanking}>
        <ProfileclassCard
          firstName={yourRanking.firstName}
          lastName={yourRanking.lastName}
          statusText={yourRanking.statusText}
          image={yourRanking.image}
        />
      </View>

      {/* Section "Classement global" */}
      <Text style={styles.sectionTitle}>Classement global</Text>
      <ScrollView contentContainerStyle={styles.globalRanking}>
        {globalRankingData.map((user, index) => (
          <ProfileclassCard
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            statusText={`${user.points} points`}
            image={avatar}
            rank={index + 1} // Passage du rang pour affichage
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  yourRanking: {
    alignItems: 'center',
    marginBottom: 20,
  },
  globalRanking: {
    paddingBottom: 20,
  },
});
