import React from 'react';
import styled from '@emotion/styled';
import { MovieContent } from '../types';

interface MovieItemProps {
  movie: MovieContent;
  color: string;
}

const Container = styled.div<{ backgroundColor: string }>`
  display: grid;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 1000px;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 5px;
  background-color: ${(props) => props.backgroundColor};
  height: 50px;
`;

const Item = styled.div<{ align?: string }>`
  text-align: ${(props) => props.align};
`;

function MovieItem({ movie, color }: MovieItemProps) {
  return (
    <Container backgroundColor={color}>
      <Item>{movie.title}</Item>
      <Item>{movie.engTitle}</Item>
      <Item align={'center'}>{movie.year}</Item>
      <Item align={'center'}>{movie.country}</Item>
      <Item align={'center'}>{movie.genre}</Item>
      <Item align={'center'}>{movie.status}</Item>
      <Item align={'center'}>{movie.director}</Item>
      <Item align={'center'}>{movie.company}</Item>
    </Container>
  );
}

export default MovieItem;
