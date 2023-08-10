import logo from './logo.svg';
import './App.css';

import Header from './containers/Header/Header';
import { Outlet } from 'react-router';
import { redirect } from "react-router-dom";
import { connect } from "react-redux";
function App() {
  // if (!this.props.isLoggedIn)
  //   return redirect("/login");
  return (
    <div className="App">

      <div className="header">

        <Header /></div>
      {/* Outlet vị trí chứa các con */}
      <div className='content'><Outlet /></div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}
export default connect(mapStateToProps)(App);
