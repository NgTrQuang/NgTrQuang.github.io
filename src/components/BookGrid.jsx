import React from "react";

import BookItem from './BookItem';
import styles from './bookstyles.module.css';

const BooksGrid = (props) => {
  const foundBooks = [];  

    props.books.forEach((book) => {
      if (book.name.indexOf(props.filterText) === -1) {
        return;
      }
       // Correct! Key should be specified inside the array.
      foundBooks.push(<BookItem key={book.name} book={book} currentUser={props.currentUser}/> );
    })

  return (   
    <main className={styles.main_block}>
      <div style={{fontWeight: 'bold'}}> Số sản phẩm tìm thấy: {foundBooks.length}</div>
      <section className={styles.grid_container}>
        {foundBooks}
      </section>

    </main>
 );
};

export default BooksGrid;
