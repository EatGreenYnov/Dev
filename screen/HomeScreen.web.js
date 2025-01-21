import React from 'react';
import Navbar from '../component/HomeComponent/NavBar';
import styled from 'styled-components';
import Chart from '../component/HomeComponent/Chart';

const Home = () => {
  return (
    <PageContainer>
      <Navbar />

      <Content>
        <Chart />
      </Content>
    </PageContainer>
  );
};

export default Home;

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  height: 100%; /* Assure-toi que l'élément prend toute la hauteur */
  overflow: auto; /* Permet le défilement si le contenu dépasse */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  text-align: center;
  margin-top: 50px;
`;