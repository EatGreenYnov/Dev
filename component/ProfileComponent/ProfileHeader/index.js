import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import styled from 'styled-components';

const ProfileHeader = ({ profilePicture, onEditClick, isEditable }) => {
  return (
    <HeaderContainer>
      <Avatar image={profilePicture} size="xlarge" shape="circle" />
      <EditButton 
        onClick={onEditClick} 
        label={isEditable ? "Save" : "Edit"} 
        className="p-button-success"
      />
    </HeaderContainer>
  );
};

export default ProfileHeader;

const HeaderContainer = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 20px;
`;

const EditButton = styled(Button)`
  position: absolute;
  bottom: -10px;
  right: 10px;
`;
