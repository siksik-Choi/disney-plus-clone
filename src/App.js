import requests from './api/request';
import './App.css';
import Banner from './components/Banner';
import Category from './components/Category';
import Nav from './components/Nav';
import styled from 'styled-components';
import Row from './components/Row';
import { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';


const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path='/home' element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

