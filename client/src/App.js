import React from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './store/actions';

import Header from "./components/Navigation/Header.js";
import Landing from './view/Landing/Landing';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={props => <Landing {...props} />}/>
      </div>
    );
  }
}

export default connect(null, actions)(App);
