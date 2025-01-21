import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const ChartsComponent = () => {
  const [data, setData] = useState({ barData: null, doughnutData: null, lineData: null });

  // Effectuer un GET pour récupérer les tickets depuis l'API backend
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tickets');
        const tickets = await response.json();
        processData(tickets); // Processer les données après récupération
      } catch (error) {
        console.error('Erreur lors de la récupération des tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  // Traitement des données
  const processData = (tickets) => {
    // Graphique à barres : Nombre de fois que chaque catégorie a été achetée
    const categoriesCount = tickets.reduce((acc, ticket) => {
      const category = ticket.Catégorie;
      acc[category] = (acc[category] || 0) + 1; // Incrémenter pour chaque ticket
      return acc;
    }, {});

    const barData = {
      labels: Object.keys(categoriesCount),
      datasets: [
        {
          label: 'Nombre d\'achats par Catégorie',
          data: Object.values(categoriesCount),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Graphique en anneau : Pollution par catégorie (uniquement une fois par catégorie)
    const co2Data = tickets.reduce((acc, ticket) => {
      const category = ticket.Catégorie;
      const co2 = ticket['CO2_e_per_kg'] * ticket['Quantité (kg)']; // CO2 = CO2e_kg * Quantité
      if (!acc[category]) {
        acc[category] = co2; // On ne garde qu'une seule valeur de pollution par catégorie
      }
      return acc;
    }, {});

    const doughnutData = {
      labels: Object.keys(co2Data),
      datasets: [
        {
          data: Object.values(co2Data),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#FFC300'],
        },
      ],
    };

    // Graphique linéaire : Evolution du CO2 par ticket (limiter à 50 tickets)
    const lineData = {
      labels: tickets.slice(0, 50).map(ticket => formatDate(ticket.Date)), // Limiter à 50 tickets et formater la date
      datasets: [
        {
          label: 'Évolution du CO2 par Ticket (kg)',
          data: tickets.slice(0, 50).map(ticket => ticket['CO2_e_per_kg'] * ticket['Quantité (kg)']),
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.1,
        },
      ],
    };

    setData({ barData, doughnutData, lineData }); // Mettre à jour l'état avec les données
  };

  // Fonction pour formater la date au format jj/mm/aaaa
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '20px' }}>
      <div style={{ width: '48%', margin: '10px 0', padding: '20px', backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <h3>Nombre d'achats par catégorie de produit</h3>
        {data.barData ? <Chart type="bar" data={data.barData} /> : <p>Chargement...</p>}
      </div>

      <div style={{ width: '48%', margin: '10px 0', padding: '20px', backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <h3>Moyenne de pollution par catégorie en CO2_e_per_kg</h3>
        {data.doughnutData ? <Chart type="doughnut" data={data.doughnutData} /> : <p>Chargement...</p>}
      </div>

      <div style={{ width: '48%', margin: '10px 0', padding: '20px', backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <h3>Évolution du CO2 par Ticket</h3>
        {data.lineData ? <Chart type="line" data={data.lineData} /> : <p>Chargement...</p>}
      </div>
    </div>
  );
};

export default ChartsComponent;
