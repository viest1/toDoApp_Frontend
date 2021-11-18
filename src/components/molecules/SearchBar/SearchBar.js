import React from 'react';
import searchIcon from '../../../assets/icons/search.png';
import { ContainerIconP, InputSearch } from './SearchBar.styles';

const SearchBar = ({ isFlexEnd, handleSearch }) => {
  return (
    <ContainerIconP isFlexEnd={isFlexEnd}>
      <img src={searchIcon} alt="search icon" />
      <InputSearch type="text" placeholder="Search" onKeyUp={handleSearch} />
    </ContainerIconP>
  );
};

export default SearchBar;
