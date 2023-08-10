import logo from './logo.svg';
import './App.css';

import Header from './containers/Header/Header';
import { Outlet } from 'react-router';
import { redirect } from "react-router-dom";



function App() {

  return (

    <div className="App">

      <div className="header">

        <Header /></div>
      {/* Outlet vị trí chứa các con */}
      <div className='content'><Outlet /></div>
    </div>
  );
}

export default App;
