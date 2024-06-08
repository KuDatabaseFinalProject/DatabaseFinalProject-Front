import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 1000px;
  grid-template-columns: repeat(8, 1fr);
  background-color: #4682b4;
  height: 50px;
`;

const Item = styled.div`
  color: white;
  font-weight: bold;
  text-align: center;
`;

function MovieHeader() {
  return (
    <Container>
      <Item>영화명</Item>
      <Item>영화명(영문)</Item>
      <Item>제작년도</Item>
      <Item>제작국가</Item>
      <Item>장르</Item>
      <Item>제작상태</Item>
      <Item>감독</Item>
      <Item>제작사</Item>
    </Container>
  );
}

export default MovieHeader;
