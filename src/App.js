import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';

import NavBar from "./components/NavBar"
import IndexContainer from "./components/containers/IndexContainer";
import DetailContainer from "./components/containers/DetailContainer"
import ArtListContainer from "./components/containers/ArtListContainer"

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
            <Route path={`/artwork/${this.props.selectedArtwork.apiId}`} component={DetailContainer} artwork={this.props.selectedArtwork}/>

            <Route path="/artwork" render={(routerProps) => <IndexContainer {...routerProps} />}/>


            // <Route path="/artwork" component={IndexContainer} />
            <Route path="/individualArtwork" component={DetailContainer} />
          </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    artworkArray: state.artworkArray,
    selectedArtwork: state.selectedArtwork,
  }
}

export default connect(mapStateToProps)(App);


// <Route exact path="/" render={() => <Home/>}/>
