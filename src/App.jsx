// import React,  { Fragment, useState, useEffect } from "react";
// import React, {Fragment} from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import {Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

import AuthService from "./services/auth.service";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import FilterableBookGrid from "./components/FilterableBookGrid";
import Profile from "./components/Profile";
//import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

// import EventBus from "./common/EventBus";

import HeaderComponent from "./components/HeaderComponent";
import ListBookComponent from "./components/ListBookComponent";
import UpdateBookComponent from "./components/UpdateBookComponent";
import ViewBookComponent from "./components/ViewBookComponent";
import CreateBookComponent from "./components/CreateBookComponent";



const currentUser = AuthService.getCurrentUser();
const App = () => {
  return (
    
    <> 
    {/* <Router> */}
    {/* Gom lại header và body làm 1 để có thể return theo js cũng như react chỉ return về 1 kết quả trả về https://reactjs.org/docs/fragment.html*/}
    {/* có thể viết Short Syntax: <Fragment></Fragment> ~~ <></>*/}
      
    <HeaderComponent/>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<FilterableBookGrid currentUser={currentUser}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          {/* <Route path="/user" element={<BoardUser/>} /> */}
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>}/>
          {/* <Route path="/books-all" element={<ListBookComponent/>}/>              */}

          <Route path="/books-all" element={<ListBookComponent/>}/>

          <Route path="/add-book/" element={<CreateBookComponent/>}/>

          <Route path="/update-book/:id" element={<UpdateBookComponent/>}/>

          <Route path="/view-book/:id" element={<ViewBookComponent/>}/>
        </Routes>
      </div>
      {/* </Router> */}
    </>
  );
};

export default App;
