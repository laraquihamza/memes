import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import MemePage from './MemePage';
import NotFound from './components/NotFound';
import Signup from './Signup';
import Signin from './Signin';
import Upload from './Upload';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<App/>} />
    <Route path="/meme/:id" element={<MemePage/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/upload" element={<Upload/>} />

    <Route element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
