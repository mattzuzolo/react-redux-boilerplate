import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtCard from "../ArtCard"

class ArtListContainer extends Component {

  onClickArtwork = (event, selectedArtwork) => {
    // console.log("This is what you selected: ", selectedArtwork);
    // console.log("router props in onClic", this.props.routerProps)
    this.props.routerProps.history.push(`/artwork/${this.props.selectedArtwork.apiId}`)
    this.props.selectArtwork(selectedArtwork);
  }

  render(){
    // console.log("Router props in artlist", this.props.routerProps)
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
    selectedArtwork: state.selectedArtwork,
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateArtworkArray: (artworkArray => {
      dispatch({type: "UPDATE_ARTWORK_ARRAY", payload: artworkArray})
    }),
    updateTestString: (newString => {
      dispatch({type: "CHANGE_MESSAGE", payload: newString})
    }),
    selectArtwork: (chosenArtwork) => {
      dispatch({type: "SELECT_ARTWORK", payload: chosenArtwork})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtListContainer);
