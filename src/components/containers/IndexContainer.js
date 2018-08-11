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
    // console.log("COMPONENT IS MOUNTED!!!")
    this.props.updateTestString("This string is being updated in IndexContainer's ComponentDidMount");

    fetch("http://localhost:4000/artwork")
    // fetch("https://agile-anchorage-40481.herokuapp.com/artwork")
      .then(response => response.json())
      .then(data => this.props.updateArtworkArray(data))
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
    console.log("Current query on render: ", this.state.activeQuery)
    // console.log("Submitted query on render: ", this.state.submittedQuery)
    return(
      <div className="container div--index-container">
        <form onSubmit={this.handleFormSubmit}>
          <input placeholder="search for art here" value={this.state.activeQuery} onChange={this.onQueryChange} ></input>
          <button>Click me for art</button>
          <ArtListContainer />
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
  // console.log("mapDispatchToProps dispatch: ", dispatch )
  return {
    updateArtworkArray: (artworkArray => {
      console.log("Artwork array at MDP: ", artworkArray);
      dispatch({type: "UPDATE_ARTWORK_ARRAY", payload: {artworkArray}})
    }),
    updateTestString: (newString => {
      dispatch({type: "CHANGE_MESSAGE", payload: newString})
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
