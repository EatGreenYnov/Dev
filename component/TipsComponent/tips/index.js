import React from 'react';
import { Card } from 'primereact/card';
import styled from 'styled-components';

const tips = [
  "Manger local : Choisissez des produits locaux pour réduire les émissions de CO2 liées au transport des aliments.",
  "Réduire la consommation de viande : Diminuez la consommation de viande, notamment de viande rouge, pour limiter l'empreinte carbone.",
  "Privilégier les aliments de saison : Mangez des fruits et légumes de saison pour éviter les impacts environnementaux liés à la culture sous serre.",
  "Choisir des produits biologiques : Les produits bio sont souvent cultivés sans pesticides chimiques, ce qui protège l'environnement et la biodiversité.",
  "Éviter les aliments ultra-transformés : Les produits ultra-transformés ont souvent un impact environnemental plus élevé à cause de la production, de l'emballage et du transport.",
  "Utiliser des emballages réutilisables : Apportez vos sacs, bocaux ou contenants pour éviter le gaspillage plastique.",
  "Réduire le gaspillage alimentaire : Planifiez vos repas et stockez vos aliments correctement pour éviter de jeter de la nourriture.",
  "Adopter un régime végétarien ou végétalien : Un régime sans produits d'origine animale consomme moins de ressources naturelles.",
  "Consommer des protéines végétales : Les légumineuses, les noix, et le tofu sont d'excellentes sources de protéines qui ont un faible impact environnemental.",
  "Opter pour des céréales complètes : Les céréales complètes nécessitent moins d'engrais et de pesticides, tout en étant meilleures pour la santé.",
  "Faire son compost : Compostez vos déchets organiques pour réduire la quantité de déchets envoyés à la décharge.",
  "Réduire la consommation de produits laitiers : Les produits laitiers sont responsables de grandes émissions de gaz à effet de serre, alors que des alternatives comme les laits végétaux existent.",
  "Consommer de l'eau en bouteille réutilisable : Privilégiez l'eau du robinet et évitez les bouteilles plastiques à usage unique.",
  "Choisir des produits équitables : Recherchez des produits issus du commerce équitable, souvent plus durables et responsables.",
  "Jardinage à domicile : Cultiver vos propres légumes et herbes réduit l'empreinte carbone des produits que vous consommez.",
  "Éviter les poissons en danger : Vérifiez les labels de pêche durable pour éviter de contribuer à la surexploitation des océans.",
  "Réduire la consommation de sucre : La production de sucre, en particulier celle du sucre de canne, peut avoir un impact environnemental majeur.",
  "Éviter les aliments importés à forte empreinte carbone : Soyez vigilant sur les produits importés (comme le quinoa ou l’avocat) qui peuvent avoir un fort impact écologique.",
  "Cuisiner à la maison : Cuisiner soi-même avec des ingrédients bruts permet de réduire les emballages et d'avoir un meilleur contrôle sur la provenance des produits.",
  "Pratiquer l'agriculture urbaine : Créez des potagers urbains pour cultiver vos propres légumes tout en contribuant à une alimentation durable."
];

const Tips = () => {
  return (
    <TipsContainer>
      <h2>Conseils pour une alimentation plus durable</h2>
      <CardContainer>
        {tips.map((tip, index) => (
          <Card key={index} className="tip-card" title={`Conseil #${index + 1}`}>
            <p>{tip}</p>
          </Card>
        ))}
      </CardContainer>
    </TipsContainer>
  );
};

export default Tips;

const TipsContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  .tip-card {
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #fff;
  }
`;
