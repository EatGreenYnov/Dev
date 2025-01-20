import React from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import styled from 'styled-components';


const UserMenu = () => {
  let menu = React.useRef(null);

  const items = [
    { label: 'Profil', icon: 'pi pi-user', command: () => console.log('Profil') },
    { label: 'Déconnexion', icon: 'pi pi-sign-out', command: () => console.log('Déconnexion') }
  ];

  return (
    <div>
      <Menu model={items} popup ref={menu} />
      <UserButton 
        icon="pi pi-user" 
        className="p-button-rounded p-button-text" 
        onClick={(event) => menu.current.toggle(event)} 
      />
    </div>
  );
};

export default UserMenu;

const UserButton = styled(Button)`
  border-radius: 50%;
  background-color: #007ad9;
  color: white;
`;