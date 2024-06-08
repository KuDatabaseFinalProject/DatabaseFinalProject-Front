import React from 'react';
import styled from '@emotion/styled';
import SearchBar from '../components/SearchBar';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Home() {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
}

export default Home;
