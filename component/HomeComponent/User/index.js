import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigate } from 'react-router-native';

const UserMenu = () => {
  const menu = useRef(null);
  const navigate = useNavigate();

  const items = [
    { 
      label: 'Profil', 
      icon: <AntDesign name="user" size={20} color="black" />, 
      command: (event) => {
        menu.current?.hide(event);
        navigate('/profile');
      } 
    },
    { 
      label: 'Déconnexion', 
      icon: <AntDesign name="logout" size={20} color="black" />, 
      command: () => console.log('Déconnexion') 
    }
  ];

  return (
    <div>
      <Menu model={items} popup ref={menu} />
      <UserButton 
        icon={<AntDesign name="user" size={24} color="black" />}
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