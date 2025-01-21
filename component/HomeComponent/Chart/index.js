import React from 'react';
import { Chart } from 'primereact/chart';
import styled from 'styled-components';

// Génération de fausses données pour les graphiques
const generateFakeData = () => {
  return {
    barData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Ventes',
          data: [65, 59, 80, 81, 56],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    doughnutData: {
      labels: ['Ventes A', 'Ventes B', 'Ventes C'],
      datasets: [
        {
          data: [300, 200, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    },
    lineData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Profit',
          data: [40, 45, 50, 60, 70],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.1
        }
      ]
    }
  };
};

const ChartsComponent = () => {
  const { barData, doughnutData, lineData } = generateFakeData();

  return (
    <ChartsContainer>
      <ChartWrapper>
        <h2>Graphique à Barres</h2>
        <Chart type="bar" data={barData} />
      </ChartWrapper>

      <ChartWrapper>
        <h2>Graphique en Anneau</h2>
        <Chart type="doughnut" data={doughnutData} />
      </ChartWrapper>

      <ChartWrapper>
        <h2>Graphique Linéaire</h2>
        <Chart type="line" data={lineData} />
      </ChartWrapper>
    </ChartsContainer>
  );
};

export default ChartsComponent;

const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;  /* Pour que les graphiques soient alignés en ligne sur des écrans plus grands */
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
    width: 100%;  /* Sur les petits écrans, occuper toute la largeur */
    margin: 10px 0;
  }
`;
