import React from 'react';
// import Navbar from '../component/HomeComponent/NavBar';
import styled from 'styled-components';
import Profile from '../component/ProfileComponent/Profile';

const Screen = () => {
  return (
    <PageContainer>
      {/* <Navbar /> */}

      <Content>
        <Profile />
      </Content>
    </PageContainer>
  );
};

export default Screen;

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  overflow: auto; 
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