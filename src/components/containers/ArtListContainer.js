import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtCard from "../ArtCard"

class ArtListContainer extends Component {

  render(){
    return(
      <div className="container div--art-list-container">
        {this.props.artworkArray.map(individualCard => (
          <ArtCard
            className="artList"
            key={individualCard.apiId}
            id={individualCard.apiId}
            title={individualCard.title}
            artist={individualCard.artist}
            imageUrl={individualCard.imageUrl}
          />
        ))}
      </div>
    )
  }


}


function mapStateToProps(state){
  return {
    artworkArray: state.artworkArray,
    // testString: state.testString,
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateArtworkArray: (artworkArray => {
      dispatch({type: "UPDATE_ARTWORK_ARRAY", payload: artworkArray})
    }),
    updateTestString: (newString => {
      dispatch({type: "CHANGE_MESSAGE", payload: newString})
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtListContainer);
