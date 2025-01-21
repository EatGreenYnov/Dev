import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CardComponent = ({ leftText, rightText, onPress }) => {
  const [selected, setSelected] = useState(false); // Gérer l'état sélectionné

  const handlePress = () => {
    setSelected(!selected); // Inverser l'état
    if (onPress) onPress(); // Appeler la fonction parent si fournie
  };

  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.cardSelected]}
      onPress={handlePress}
    >
      <View style={styles.leftSection}>
        <Text style={[styles.leftText, selected && styles.textSelected]}>{leftText}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={[styles.rightText, selected && styles.textSelected]}>{rightText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: '90%',
    alignSelf: 'center',
  },
  cardSelected: {
    backgroundColor: 'green', // Couleur de fond lorsqu'elle est sélectionnée
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  leftText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  rightText: {
    fontSize: 16,
    color: '#555',
  },
  textSelected: {
    color: '#fff', // Texte blanc lorsqu'elle est sélectionnée
  },
});

export default CardComponent;
