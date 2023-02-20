import React, { Component } from "react";
import BookService from "../services/BookService";

class CreateBookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: "",
      photo: "",
      price: 0.0,

      submitted: false,
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePhotoHandler = this.changePhotoHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.saveBook = this.saveBook.bind(this);
  }

  changeNameHandler(e) {
    this.setState({ name: e.target.value });
  }

  changePhotoHandler(e) {
    this.setState({ photo: e.target.value });
  }

  changePriceHandler(e) {
    this.setState({ price: e.target.value });
  }

  //sau khi chạy render phần componentDidMount sẽ được chạy tiếp theo nếu chúng ta đặt tương tác
  // componentDidMount() {
  //     if ((this.state.id === '_add')) {
  //         // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" + this.state.id);
  //         return
  //     } else{
  //         BookService.getBookById(this.state.id).then((res) =>{
  //             let data = res.data;
  //             this.setState({
  //                 // name: book.name,
  //                 // photo: book.photo,
  //                 // price: book.price
  //                 books: data,
  //             });
  //         });
  //     }   return
  // }

  saveBook = (e) => {
    e.preventDefault();
    var data = {
      name: this.state.name,
      photo: this.state.photo,
      price: this.state.price,
    };

    BookService.createBook(data)
      .then((response) => {
        // this.props.history.push('/books-all');
        this.setState({
          id: response.data.id,
          name: response.data.name,
          photo: response.data.photo,
          price: response.data.price,

          submitted: true,
        });
        // console.log('book => ' + JSON.stringify(data));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  newBook() {
    this.setState({
      id: null,
      name: "",
      photo: "",
      price: 0.0,

      submitted: false,
    });
  }

  //update cùng với create dùng 1 trang
  // if ((this.state.id === '_add')) {

  // this.setState({redirect: true});
  // } else{
  // BookService.updateBook(this.state.id, data).then(res =>{
  //     // setTimeout((e) => {
  //     //     this.props.history.push('/books');
  //     // }, 1000);
  //     this.props.history.push('/books-all');
  // });

  // }

  // cancel() {
  //     this.props.history.push('/books-all');
  // }

  // //so sánh ${id} để in ra tiêu đề phù hợp
  // getTitle() {
  //     if(this.state.id === '_add'){
  //         return <h3 className = 'text-center'> Add Book </h3>
  //     }else{
  //         return <h3 className = 'text-center'> Update Book </h3>
  //     }
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <a href="/books-all">
                  <button className="btn btn-success" onClick={this.newBook}>
                    Back to list
                  </button>
                </a>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Tên sách"
                    className="form-control"
                    id="name"
                    required
                    value={this.state.name}
                    onChange={this.changeNameHandler}
                    name="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="photo">Photo</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="photo"
                    required
                    value={this.state.photo}
                    onChange={this.changePhotoHandler}
                    name="photo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Price</label>
                  <input
                    type="text"
                    placeholder="Giá"
                    className="form-control"
                    id="price"
                    required
                    value={this.state.price}
                    onChange={this.changePriceHandler}
                    name="price"
                  />
                </div>
                <br />
                <button onClick={this.saveBook} className="btn btn-success">
                  Submit
                </button>
                <a href="/books-all">
                  <button className="btn btn-danger" style = {{ marginLeft: '10px' }}>
                    Back to list
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}



export default CreateBookComponent;
