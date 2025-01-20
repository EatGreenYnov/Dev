import React from 'react';
import Navbar from '../component/HomeComponent/NavBar';
import styled from 'styled-components';

const Home = () => {
  return (
    <PageContainer>
      <Navbar />

      <Content>
        <h1>Bienvenue sur la page d'accueil</h1>
        <p>Explorez nos services et contactez-nous pour plus d'informations.</p>
      </Content>
    </PageContainer>
  );
};

export default Home;

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
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