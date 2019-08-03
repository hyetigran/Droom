import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import { connect } from 'react-redux';
//import * as actions from '../actions';

import Header from "./components/Navigation/Header.js";

class App extends React.Component {
  componentDidMount() {
    //this.props.data
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
