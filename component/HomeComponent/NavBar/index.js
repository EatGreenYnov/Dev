import React from 'react';
import { Menubar } from 'primereact/menubar';
import styled from 'styled-components';
import UserMenu from '../User';

const Navbar = () => {
  const items = [
    { label: 'Accueil', icon: 'pi pi-home', url: '/' },
    { label: 'Tips', icon: 'pi pi-info-circle', url: '/about' },
    { label: 'Stats', icon: 'pi pi-briefcase', url: '/services' },
    { label: 'communauté', icon: 'pi pi-envelope', url: '/contact' }
  ];

  return (
    <>
      <ContentWrapper>
        <NavbarContainer>
          <NavbarContent>
            <Menubar model={items} />
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

