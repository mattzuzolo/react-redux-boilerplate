import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtListContainer from "./ArtListContainer"

class IndexContainer extends Component {

  componentDidMount(){
    console.log("COMPONENT IS MOUNTED!!!")
    this.props.updateTestString("this string was passed as a param after mounting!!!!>>>><<<<!!!");

    // fetch("http://localhost:4000/artwork")
    fetch("https://agile-anchorage-40481.herokuapp.com/artwork")
      .then(response => response.json())
      .then(data => this.props.updateArtworkArray(data))
  }

  render(){
    return(
      <div>index_container: {this.props.updateTestString}</div>
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
  console.log("mapDispatchToProps dispatch: ", dispatch )
  return {
    updateArtworkArray: (artworkArray => {
      dispatch({type: "UPDATE_ARTWORK_ARRAY", payload: artworkArray})
    }),
    updateTestString: (newString => {
      dispatch({type: "CHANGE_MESSAGE", payload: newString})
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
