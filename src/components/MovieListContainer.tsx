import React from 'react';
import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { movieAtom, selectedPageNumberAtom } from '../recoils/atoms';
import MovieItem from './MovieItem';
import MovieHeader from './MovieHeader';
import ReactPaginate from 'react-paginate';
import '../css/paginate.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 1000px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

function MovieListContainer() {
  const movie = useRecoilValue(movieAtom);
  const [selectedPageNumber, setSelectedPageNumber] = useRecoilState(selectedPageNumberAtom);

  return (
    <Container>
      <Header>
        <label>총 {movie.totalElements}건</label>
      </Header>
      <ListContainer>
        <MovieHeader />
        {movie.content.map((item, index) => (
          <MovieItem key={item.id} movie={item} color={index % 2 == 0 ? '#f0f0f0' : '#ffffff'} />
        ))}
      </ListContainer>
      <PaginationContainer>
        <ReactPaginate
          forcePage={selectedPageNumber}
          onPageChange={(selectedItem) => setSelectedPageNumber(selectedItem.selected)}
          pageCount={movie.totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </PaginationContainer>
    </Container>
  );
}

export default MovieListContainer;
