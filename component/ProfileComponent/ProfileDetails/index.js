import React from 'react';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';

const ProfileDetails = ({ firstName, lastName, onChange, isEditable }) => {
  return (
    <DetailsContainer>
      <Label>First Name:</Label>
      <InputText
        value={firstName}
        onChange={(e) => onChange('firstName', e.target.value)}
        disabled={!isEditable}
      />
      
      <Label>Last Name:</Label>
      <InputText
        value={lastName}
        onChange={(e) => onChange('lastName', e.target.value)}
        disabled={!isEditable}
      />
    </DetailsContainer>
  );
};

export default ProfileDetails;

const DetailsContainer = styled.div`
  margin-top: 20px;
`;

const Label = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;
