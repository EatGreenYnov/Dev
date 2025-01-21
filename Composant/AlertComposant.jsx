import React from 'react';
import { Alert } from 'react-native';

const AlertComponent = ({ message }) => {
  // Lorsque le composant est monté, afficher l'alerte avec le message passé en prop
  React.useEffect(() => {
    if (message) {
      Alert.alert('Message', message, [
        {
          text: 'OK',
          onPress: () => console.log('Alert closed'),
        },
      ]);
    }
  }, [message]);

  return null; // Ce composant ne rend rien à l'écran car il ne fait qu'afficher l'alerte
};

export default AlertComponent;
