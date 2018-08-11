import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtCard from "../ArtCard"

class ArtListContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      tempArray: [{
        title: "Guernica",
        artist: "Pablo Picasso",
        medium: "Oil on canvas",
        century: "20th Cenutry",
        culture: "Spanish",
        url: "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
        apiId: 568,
      },{
        title: "Las Meninas",
        artist: "Diego Velazquez",
        medium: "Oil on canvas",
        century: "19th Cenutry",
        culture: "Spanish",
        url: "https://en.wikipedia.org/wiki/Las_Meninas",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/800px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
        apiId: 754,
      },{
        title: "Nighthawks",
        artist: "Edward Hopper",
        medium: "Oil on canvas",
        century: "20th Cenutry",
        culture: "American",
        url: "https://en.wikipedia.org/wiki/Nighthawks",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg",
        apiId: 145,
      }],
    }
  }

  render(){
    return(
      <div className="container div--art-list-container">
        {this.state.tempArray.map(individualCard => (
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
