import React from 'react';
import styled from '@emotion/styled';
import SearchBar from '../components/SearchBar';
import MovieListContainer from '../components/MovieListContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

function Home() {
  return (
    <Container>
      <SearchBar />
      <MovieListContainer />
    </Container>
  );
}

export default Home;
