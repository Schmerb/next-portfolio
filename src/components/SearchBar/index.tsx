/**
 *
 * SearchBar
 *
 *  */

import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import SearchIcon from 'components/svg/Icons/SearchIcon';
import CloseIcon from 'components/svg/Icons/Close';

const searchPlaceholder = 'search resources..';

interface SearchBarProps {
  initialSearch?: string;
  onSearchChange?: (value: string) => void;
  onClickSearch?: (value: string) => void;
}

const size = { width: 25, height: 25 };

const SearchBar = ({
  initialSearch = '',
  onSearchChange,
  onClickSearch,
}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState(initialSearch);

  const inputRef = useRef(null);

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setSearchValue(value);
    onSearchChange && onSearchChange(value);
  };

  const clearSearch = () => {
    if (searchValue) {
      setSearchValue('');
      inputRef.current.focus();
    }
  };

  const handleSearchClick = () => {
    onClickSearch && onClickSearch(searchValue);
    inputRef.current.focus();
  };

  return (
    <SearchWrapper>
      <SearchInput
        ref={inputRef}
        placeholder={searchPlaceholder}
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
      <Controls>
        <CloseBtn onClick={clearSearch} isVisible={searchValue}>
          <CloseIcon
            fill="grey"
            {...size}
            style={{ transform: 'translateY(2px)' }}
          />
        </CloseBtn>
        <SearchBtn onClick={handleSearchClick}>
          <SearchIcon fill="#fff" {...size} />
        </SearchBtn>
      </Controls>
    </SearchWrapper>
  );
};

export default SearchBar;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: #fff;
  width: 90%;
  max-width: 400px;
  margin-top: 30px;
  border-radius: 20px;
  border: 1px solid #fff;
`;

const Controls = styled.div`
  display: flex;
  // border: 1px solid #000;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding-top: 2px;
  border: none;
  outline: none;
  cursor: ${({ isVisible }) => (isVisible ? 'pointer' : 'auto')};
  transition: border-color 0.3s;
`;

const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-right: 5px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: calc(100% - 50px);
  padding: 10px 25px;
  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: none;
  outline: none;
  text-align: center;
`;
