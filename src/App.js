import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import './reset.css';
import './common.css';


function App() {
  const {saved} = useSelector(state => state)
  console.log(saved)
  return (
    <div className="app">
    <Route path="/" exact component={MainPage} />
    <Route path="/list/:id" exact component={ListPage} />
  </div>
  );
}

export default App;
