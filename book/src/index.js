import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book1 from './images/Menu/Book1';
import Book2 from './images/Menu/Book2';
import Book3 from './images/Menu/Book3';
import Book4 from './images/Menu/Book4';
import Books from './images/Menu/Books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/book1" element={<Book1/>} />
          <Route path="/book2" element={<Book2/>} />
          <Route path="/book3" element={<Book3/>} />
          <Route path="/book4" element={<Book4/>} />
          <Route path="/" element={<Books/>} />

        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
