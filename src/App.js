import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Breadcrumbs from './components/Breadcrumbs';
import Video from './components/Video';
import Nav from './components/Nav';
import Seasons from './components/Seasons';
import Series from './components/Series';
import About from './components/About';


import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="Player">
          <div className="PlayerTop">
            <div className="PlayerTopContent">
              <Breadcrumbs />
              <Video />
              <Nav />
            </div>
            <div className="PlayerWp"></div>
          </div>
          <div className="PlayerBottom">
            <div className="PlayerBottomContent">
              <Seasons />
              <Series />
              <About />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
