// import axios from 'axios';
import httpCommon from '../helpers/http-common';
// import authHeader from "./auth-header";
//  const BOOK_API_BASE_URL = "http://localhost:8089/api/v1/books-all"

class BookService {

    getAllBooks() {
        return httpCommon.get("/books");
    }

    createBook(data) {
        return httpCommon.post("/books", data);
    }
// return httpCommon.get(BOOK_API_BASE_URL + '/' , bookId); " , " tạo đường dẫn hoàn chỉnh
    getBookById(id) {
        return httpCommon.get(`/books/${id}`, id);
    }

    updateBook(id, data) {
        return httpCommon.put(`/books/${id}`, data);
    }

    deleteBook(id) {
        return httpCommon.delete(`/books/${id}`, id);
    }
}

export default new BookService()