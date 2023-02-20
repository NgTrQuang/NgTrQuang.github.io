import React, { Component } from "react";
import BookService from "../services/BookService";

class ViewBookComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            // id: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount() {
        BookService.getBookById(this.state.id).then(res => {
            console.log(res.data)
            this.setState({book: res.data});
        })
    }
    
    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View Book</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label>Name: {this.state.book.name}</label>
                            <div></div>
                        </div>
                        <div className='row'>
                            <label>Photo: {this.state.book.photo}</label>
                            <div></div>
                        </div>
                        <div className='row'>
                            <label>Price: {this.state.book.price}</label>
                            <div></div>
                        </div>
                    </div>
                </div>               
            </div>
        );
    }
}

export default ViewBookComponent;
