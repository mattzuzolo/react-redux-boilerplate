import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';

import NavBar from "./components/NavBar"
import IndexContainer from "./components/containers/IndexContainer";
import DetailContainer from "./components/containers/DetailContainer"

// import { connect } from 'react-redux'
// import { changeExampleMessage } from './actions'

class App extends Component {

  // handleClick = () => {
  //   console.log('hello')
  //   this.props.changeExampleMessage()
  // }

  render() {
    return (
      <div className="container div--app App">
        <Route path="/" component={NavBar} />
          <Switch>
            <Route path="/artwork" component={IndexContainer} />
            <Route path="/individualArtwork" component={DetailContainer} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
