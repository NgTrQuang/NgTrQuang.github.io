import React, { useState, useEffect } from "react";

import Search from './Search';
import BookGrid from './BookGrid';
import styles from './bookstyles.module.css';
import UserService from "../services/user.service";

const FilterableBook = (props) => {
  const [books, setBooks] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setBooks(response.data);
      },
      (error) => {
        const _books =[
          (error.response && error.response.data) ||
          error.message ||
          error.toString()];

          setBooks(_books);
      }
    );
  }, []);

  const handleChangeFilterBooksByName = (bookName) => {
    setFilterName(bookName);
  }

  return ( 
    <main className={styles.main_block}>
      <Search filterText={filterName}
        onFilterTextChange={handleChangeFilterBooksByName}/> 
        
      <BookGrid books={books} 
        filterText={filterName} 
        currentUser={props.currentUser}
      /> 
    </main>
 );
};

export default FilterableBook;
