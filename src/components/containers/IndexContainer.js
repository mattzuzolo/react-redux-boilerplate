import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtListContainer from "./ArtListContainer"

class IndexContainer extends Component {
    constructor(props){
      super(props);

      this.state = {
        activeQuery: "",
        submittedQuery: "",
      }
    }

  componentDidMount(){
    // fetch("https://agile-anchorage-40481.herokuapp.com/artwork")
    fetch("http://localhost:4000/artwork")
      .then(response => response.json())
      .then(data => this.props.updateArtworkArray(data))
      // .then(() => this.props.updateTestString("This string is being updated in IndexContainer's ComponentDidMount"))
  }

  onQueryChange = (event) => {
    this.setState({ activeQuery: event.target.value })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let submittedQuery = this.state.activeQuery;
    this.setState({submittedQuery});
  }

  render(){
    return(
      <div className="container div--index-container">
        <form onSubmit={this.handleFormSubmit}>
          <input placeholder="search for art here" value={this.state.activeQuery} onChange={this.onQueryChange} ></input>
          <button>Click me for art</button>
          <ArtListContainer routerProps={this.props.routerProps} />
        </form>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    artworkArray: state.artworkArray,
    testString: state.testString,
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateArtworkArray: (dataArray) => {
      dispatch({type: "UPDATE_ARTWORK_ARRAY", payload: dataArray})
    },
    updateTestString: (testString) => {
      dispatch({type: "UPDATE_ARTWORK_ARRAY", payload: testString})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
