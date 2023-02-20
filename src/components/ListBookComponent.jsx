import React, { Component } from "react";
import { redirect } from "react-router-dom";
import BookService from "../services/BookService";

class ListBookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //books trạng thái như biến toàn cục
      books: []
    };
    // add san pham
    // this.addBook = this.addBook.bind(this);
    this.editBook = this.editBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentDidMount() {
    BookService.getAllBooks().then((res) => {
      this.setState({ books: res.data });
      console.log(res.data);
    });
  }

  // onClick = (e) => {
  //   this.props.onClick();
  // }

  // đường link cho edit
  editBook(id) {
    this.props.history.push(`/add-book/${id}`);
  }

  //đường link cho delete
  deleteBook(id) {
    BookService.deleteBook(id).then((res) => {
      this.setState({
        books: this.state.books.filters((book) => book.id !== id),
      });
      console.log(res.data);
    });
  }

  viewBook(id) {
    // this.props.history.push(`/view-book/${id}`);
  }

  // history.push đẩy mục mới vào ngăn xếp lịch sử cửa trinh duyệt, đường link cho create
  // addBook() {
  //   this.props.history.push(`/add-book/_add`);
  // }
// // thay đổi trạng thái khi chuyển trang
//   addBook() {
//     this.setState({
//       id: null,
//       name: "",
//       photo: "",
//       price: 0.0,

//       submitted: false,
//     });
//   }

  render() {
    return (
      <div>
        <h2 className="text-center"> List Books </h2>
        <div className="row">
          <a href="/add-book">
            {/* onClick={this.addBook} */}
            <button className="btn btn-primary" style={{ width: "10%"}}> 
              Add Book
            </button>
          </a>
        </div>
        <div className="row-auto">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Book Name </th>
                <th> Book Photo </th>
                <th> Book Price </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map((book) => (
                <tr key={book.id}>
                  <td> {book.name} </td>
                  <td>
                    {" "}
                    <img
                      className="Avatar"
                      width={"40px"}
                      height={"40px"}
                      src={book.photo}
                      alt={book.name}
                    />
                  </td>
                  <td> {book.price} </td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => this.editBook(book.id)}>
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "5%"}}
                      onClick={() => this.deleteBook(book.id)}>
                      Delete
                    </button>
                    <button
                      className="btn btn-info"
                      style={{ marginLeft: "5%"}}
                      onClick={() => this.viewBook(book.id)}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListBookComponent;
