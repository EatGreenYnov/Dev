import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';

const Profile = () => {
  // Simulons des données utilisateur pour l'instant
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
  });

  const [isEditable, setIsEditable] = useState(false);  // Pour savoir si les champs sont en mode édition

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };

  return (
    <PageContainer>
      <ProfileContainer>
        <HeaderContainer>
          <Avatar image={userData.profilePicture} size="xlarge" shape="circle" />
          <EditButton 
            onClick={handleEdit} 
            label={isEditable ? "Save" : "Edit"} 
            className="p-button-success"
          />
        </HeaderContainer>
        
        <DetailsContainer>
          <Label>First Name:</Label>
          <InputText
            value={userData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            disabled={!isEditable}
          />
          
          <Label>Last Name:</Label>
          <InputText
            value={userData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            disabled={!isEditable}
          />
        </DetailsContainer>
      </ProfileContainer>
    </PageContainer>
  );
};

export default Profile;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
`;

const ProfileContainer = styled.div`
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center; 
`;

const HeaderContainer = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 20px;
`;

const EditButton = styled(Button)`
  position: flex;
  margin : 10px;
`;

const DetailsContainer = styled.div`
  margin-top: 20px;
  width: 100%; 
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;
