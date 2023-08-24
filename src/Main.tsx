import React from 'react';
import "./App.css";
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Movies from './pages/Movies';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { useSelector } from 'react-redux';
import { RootState } from "./store/store";
import MovieDetails from './pages/MovieDetails';

function Main() {
  const {user} = useSelector((state: RootState) => state.user);

  console.log(user)
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/movie/:id' element={<MovieDetails />}></Route>
      </Routes>
    </div>
  )
}

export default Main;
