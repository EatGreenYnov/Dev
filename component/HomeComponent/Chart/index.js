import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import styled from 'styled-components';
import * as XLSX from 'xlsx'; // Import de la bibliothèque pour lire les fichiers Excel

const ChartsComponent = () => {
  const [data, setData] = useState(null);

  // Lecture du fichier Excel et transformation des données
  const readExcelFile = (file) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const ab = e.target.result;
      const wb = XLSX.read(ab, { type: 'array' });
      const sheet = wb.Sheets[wb.SheetNames[0]]; // On récupère la première feuille
      const rows = XLSX.utils.sheet_to_json(sheet); // Convertit la feuille en JSON

      // Transformation des données en fonction des besoins des graphiques
      processData(rows);
    };

    reader.readAsArrayBuffer(file);
  };

  // Traitement des données du fichier
  const processData = (rows) => {
    // Graphique à barres : Quantité par catégorie de produit
    const categories = rows.reduce((acc, row) => {
      const category = row['Catégorie'];
      const quantity = row['Quantité (kg)'];
      acc[category] = (acc[category] || 0) + quantity;
      return acc;
    }, {});

    const barData = {
      labels: Object.keys(categories),
      datasets: [
        {
          label: 'Quantité par Catégorie (kg)',
          data: Object.values(categories),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Graphique en anneau : Catégories qui polluent le plus (basé sur CO2)
    const co2Data = rows.reduce((acc, row) => {
      const category = row['Catégorie'];
      const co2 = row['CO2_e_per_kg'] * row['Quantité (kg)'];
      acc[category] = (acc[category] || 0) + co2;
      return acc;
    }, {});

    const doughnutData = {
      labels: Object.keys(co2Data),
      datasets: [
        {
          data: Object.values(co2Data),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    // Graphique linéaire : Evolution du CO2 pour chaque ticket
    const lineData = {
      labels: rows.map((row) => row['Date']),
      datasets: [
        {
          label: 'CO2 par Ticket (kg)',
          data: rows.map((row) => row['CO2_e_per_kg'] * row['Quantité (kg)']),
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.1,
        },
      ],
    };

    // Mise à jour de l'état avec les données transformées
    setData({ barData, doughnutData, lineData });
  };

  // Fonction pour gérer l'upload du fichier
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      readExcelFile(file);
    }
  };

  return (
    <ChartsContainer>
      <UploadContainer>
        <input 
          type="file" 
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
        />
      </UploadContainer>

      {data ? (
        <>
          <ChartWrapper>
            <h2>Graphique à Barres</h2>
            <Chart type="bar" data={data.barData} />
          </ChartWrapper>

          <ChartWrapper>
            <h2>Graphique en Anneau</h2>
            <Chart type="doughnut" data={data.doughnutData} />
          </ChartWrapper>

          <ChartWrapper>
            <h2>Graphique Linéaire</h2>
            <Chart type="line" data={data.lineData} />
          </ChartWrapper>
        </>
      ) : (
        <p>Veuillez importer un fichier Excel pour afficher les graphiques.</p>
      )}
    </ChartsContainer>
  );
};

export default ChartsComponent;

const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
`;

const ChartWrapper = styled.div`
  width: 48%;
  margin: 10px 0;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  height: auto;
  overflow: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const UploadContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;

  input[type="file"] {
    padding: 10px;
    font-size: 16px;
  }
`;