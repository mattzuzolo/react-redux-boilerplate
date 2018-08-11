import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';

import NavBar from "./components/NavBar"
import IndexContainer from "./components/containers/IndexContainer";
import AnnotationContainer from "./components/containers/AnnotationContainer"

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
        Hello world
        <Route path="/" component={NavBar} />
          <Switch>
            <Route path="/annotations" component={AnnotationContainer} />
            <Route path="/artwork" component={IndexContainer} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);


// const mapStateToProps = (state) => {
//   return {
//     exampleMessage: state.exampleState.exampleMessage
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeExampleMessage: () => { dispatch(changeExampleMessage()) }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
