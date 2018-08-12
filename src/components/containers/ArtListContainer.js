import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtCard from "../ArtCard"

class ArtListContainer extends Component {

  onClickArtwork = (event, selectedArtwork) => {
    console.log("You clicked a work of art!!!");
    console.log("This is what you selected: ", selectedArtwork);
    this.props.selectArtwork(selectedArtwork)
  }

  render(){
    return(
      <div className="container div--art-list-container">
        {this.props.artworkArray.map(individualCard => (
          <ArtCard
            className="artList"
            artwork={individualCard}
            key={individualCard.apiId}
            id={individualCard.apiId}
            title={individualCard.title}
            artist={individualCard.artist}
            imageUrl={individualCard.imageUrl}
            onClickArtwork={this.onClickArtwork}
          />
        ))}
      </div>
    )
  }


}


function mapStateToProps(state){
  return {
    artworkArray: state.artworkArray,
    selectedArtwork: {},
    // testString: state.testString,
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
    selectArtwork: (chosenArtwork) => {
      dispatch({type: "SELECT_ARTWORK", payload: chosenArtwork})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtListContainer);
