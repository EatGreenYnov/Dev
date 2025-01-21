import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import ProfileCard from '../../Composant/CardCompanent/profilepgcard';
import CardComponent from '../../Composant/CardCompanent/CardComponent';
import Navbar from '../../Composant/Navbar/Navbar';
import img from '../../assets/ishigami_senku_18427.png';
import AlertComponent from '../../Composant/AlertComposant';

export default function Page_Defi() {
  const [progress, setProgress] = useState(0.0); // État initial de la progression
  const [selectedCards, setSelectedCards] = useState([]); // Suivi des cartes sélectionnées
  const [cardsData, setCardsData] = useState([]); // Données dynamiques des cartes
  const [alertMessage, setAlertMessage] = useState(null); // Texte de l'alerte

  // Génération des valeurs fixes qui totalisent exactement 1.0
  const generateFixedValues = () => {
    return [0.1, 0.1, 0.1, 0.15, 0.1, 0.1, 0.1, 0.25];
  };

  useEffect(() => {
    // Initialisation des données des cartes
    const texts = [
      'Manger 5 fruits et légumes',
      'Réduire la consommation d\'énergie',
      'Utiliser moins de plastique',
      'Marcher 10 000 pas',
      'Économiser de l\'eau',
      'Recycler ses déchets',
      'Participer à une activité écologique',
      'Faire du covoiturage',
    ];
    const fixedValues = generateFixedValues();
    const data = texts.map((text, index) => ({
      text,
      value: fixedValues[index],
    }));
    setCardsData(data);
  }, []);

  // Fonction pour gérer le toggle des cartes
  const handleCardToggle = (index) => {
    const cardValue = cardsData[index].value;
    let newProgress = progress;

    if (selectedCards.includes(index)) {
      // Si la carte est déjà sélectionnée, on la retire
      setSelectedCards(selectedCards.filter((i) => i !== index));
      newProgress = Math.max(progress - cardValue, 0); // Réduction de la progression
    } else {
      // Sinon, on l'ajoute
      setSelectedCards([...selectedCards, index]);
      newProgress = Math.min(progress + cardValue, 1); // Augmentation de la progression
    }

    setProgress(newProgress);

    // Vérifie si la progression atteint 1.0 et affiche la popup de félicitations
    if (newProgress === 1) {
      setAlertMessage('Félicitations ! Vous avez complété tous les défis ! 🎉');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Navbar />
        <ProfileCard
          image={img}
          firstName="John"
          lastName="Doe"
          progress={progress} // Passage de la progression dynamique
        />
        <Text style={styles.title}>Défis à compléter :</Text>

        {/* Scroll limité aux défis */}
        <ScrollView contentContainerStyle={styles.scrollDefis}>
          {cardsData.map((card, index) => (
            <CardComponent
              key={index}
              leftText={card.text}
              rightText={`+${(card.value * 100).toFixed(0)}`}
              onPress={() => handleCardToggle(index)} // Ajout de gestion du clic
            />
          ))}
        </ScrollView>
      </View>

      {/* Afficher l'alerte si le message est défini */}
      {alertMessage && <AlertComponent message={alertMessage} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollDefis: {
    alignItems: 'center',
    paddingBottom: 20, // Espace en bas
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});
