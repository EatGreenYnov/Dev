import React from 'react';
import { Menubar } from 'primereact/menubar';
import styled from 'styled-components';
import UserMenu from '../User';
import { AntDesign } from '@expo/vector-icons';
import { useNavigate } from 'react-router-native';

const Navbar = () => {

  const navigate = useNavigate();

  const items = [
    { label: 'Accueil', icon: <AntDesign name="home" size={20} color="black" />, url: '/' },
    { label: 'Tips', icon: <AntDesign name="bulb1" size={20} color="black" />, url: '/about' },
    { label: 'Communauté', icon: <AntDesign name="team" size={20} color="black" />, url: '/contact' }
  ];

  return (
    <>
      <ContentWrapper>
        <NavbarContainer>
          <NavbarContent>
            <Menubar model={items} className="custom-menubar" />
            <UserMenu />
          </NavbarContent>
        </NavbarContainer>
      </ContentWrapper>
    </>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  position: fixed;  /* Fixe la navbar en haut */
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #f8f9fa; /* Couleur de fond */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between; /* Espacement entre Menubar et UserMenu */
  align-items: center;
  padding: 0 20px; /* Espacement sur les côtés */
`;

const ContentWrapper = styled.div`
  padding-top: 60px; /* Ajuste le padding pour éviter que le contenu soit caché sous la navbar */
`;

const CustomMenubar = styled(Menubar)`
  .p-menuitem {
    margin-right: 30px; /* Espacement entre les items */
  }
`;

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  padding-top: 60px; /* Laisse de l'espace pour la navbar fixe */
  height: 100%; /* Assure que l'élément prend toute la hauteur */
  overflow: auto; /* Permet le défilement */
`;
