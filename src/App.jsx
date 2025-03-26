// src/App.jsx

import React from 'react';
import Home from './Home';
import BookFrom from './components/BookForm'
import './App.css'; // Import global styles
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
   <Routes>
    <Route path='/' element ={<Home/>}/>
     <Route path='/abc' element={<BookForm/>}/>
   </Routes>
  );
}

export default App;
