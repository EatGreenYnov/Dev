import Tips from '../component/TipsComponent/tips';
import styled from 'styled-components';
// import Navbar from '../component/HomeComponent/NavBar';

const TipsScreen = () => {
  return (
  <PageContainer>
        {/* <Navbar /> */}
    <Tips />
  </PageContainer>
  );
};

export default TipsScreen;

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
  height: 100%; 
  overflow: auto; 
`;