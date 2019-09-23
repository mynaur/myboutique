import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './style/App.less';
import NavBar from './components/HeadLayouts/menuBar/MenuNavbar'
import SignBar from './components/HeadLayouts/signBar/SignBar'
import BaseLine from './components/HeadLayouts/baseLine/BaseLine'
import SearchBar from './components/HeadLayouts/searchBar/SearchBar'
import SideBar from './components/sidebar/SideBar'
import AboutUs from './components/HeadLayouts/menuBar/menuBarComponents/AboutUs'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <SignBar />
          <NavBar />
          <BaseLine />
          <SearchBar />
          <SideBar />
          <Route path='/About' component={AboutUs} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
