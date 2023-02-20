// import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../helpers/utils';
import styles from './bookstyles.module.css'; //thêm file css
// Correct! There is no need to specify the key here:
const BookItem = (props) => {

//    const { addBook, cartItems, increase } = useCart();

    // const isInCart = book => {
    //     return cartItems.find(item => item.id === book.id);
    //     // return !!cartItems.find(item => item.id === book.id);
    // }
    console.log("....... "+ props.currentUser)
    return ( 
        <div className="card card-body">
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
            src={props.book.photo} alt=""></img>
            <p>{props.book.name}</p>
            <h5 className="text-start">{formatNumber(props.book.price)}</h5>
            <div className="text-end">
                {/* https://codesandbox.io/s/react-router-book-detail-pages-dynamic-links-tmcjc?file=/src/Books.js */}
                
                {props.currentUser ? (
                    <button className={styles.btn_grad}><Link  to="#">Thêm vào giỏ</Link></button>
                ) : ( 
                    <Link  to="/login" className={styles.add_cart}>Xem chi tiết</Link>)
                }
               

                {/* { //JSX and conditional: https://www.codecademy.com/learn/fecp-react-part-i/modules/fecp-jsx/cheatsheet
                    isInCart(book) && 
                    <button 
                    onClick={() => increase(book)}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(book) && 
                    <button 
                    onClick={() => addBook(book)}
                    className="btn btn-primary btn-sm">Add to cart</button>
                } */}
                
            </div>
        </div>
     );
}
 
export default BookItem;