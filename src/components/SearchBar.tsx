import React, { useState } from 'react';
import styled from '@emotion/styled';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { css } from '@emotion/react';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  min-width: 1000px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 70px;
  grid-row-gap: 20px;
`;

const InputWithLabelContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Button = styled.button<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: white;
  width: 70px;
  height: 48px;
  font-size: 14px;
`;

function SearchBar() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <Container>
      <InputContainer>
        <InputWithLabelContainer>
          <label htmlFor="search">영화명</label>
          <input type="text" id="search" />
        </InputWithLabelContainer>
        <InputWithLabelContainer>
          <label htmlFor="search">감독명</label>
          <input type="text" id="search" />
        </InputWithLabelContainer>
        <InputWithLabelContainer>
          <label htmlFor="search">제작연도</label>
          <ReactDatePicker
            selected={startDate}
            shouldCloseOnSelect
            dateFormat={'yyyy.MM.dd'}
            onChange={(date: Date) => setStartDate(date)}
            css={css({
              width: '70px',
            })}
          />
          {'~'}
          <ReactDatePicker
            selected={endDate}
            shouldCloseOnSelect
            dateFormat={'yyyy.MM.dd'}
            onChange={(date: Date) => setEndDate(date)}
            css={css({
              width: '70px',
            })}
          />
        </InputWithLabelContainer>
        <InputWithLabelContainer>
          <label htmlFor="search">정렬 기준</label>
          <select>
            <option value="0">선택</option>
            <option value="1">제작연도순</option>
            <option value="2">영화명순(ㄱ~Z)</option>
          </select>
        </InputWithLabelContainer>
      </InputContainer>
      <ButtonContainer>
        <Button backgroundColor={'#5076db'}>조회</Button>
        <Button backgroundColor={'#626262'}>초기화</Button>
      </ButtonContainer>
    </Container>
  );
}

export default SearchBar;
