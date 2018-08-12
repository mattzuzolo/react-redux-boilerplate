import React, { Component } from 'react';
import { connect } from 'react-redux';


class DetailContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      tempArt: {
        title: "Guernica",
        artist: "Pablo Picasso",
        medium: "Oil on canvas",
        century: "20th Cenutry",
        culture: "Spanish",
        url: "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
        apiId: 568,
      }
    }
  }

  render(){
    console.log("Detail container props", this.props.artwork)
    return(
      <div>
        <div id="annotation-zone">
          <img src={this.props.selectedArtwork.imageUrl} alt=""></img>
        </div>
        <h1>{this.props.selectedArtwork.title}</h1>
        <h3>{this.props.selectedArtwork.artist}</h3>
        <p>{this.props.selectedArtwork.medium} <br /><a href={this.props.selectedArtwork.url}>Read more here</a></p>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    selectedArtwork: state.selectedArtwork,
  }
}

export default connect(mapStateToProps)(DetailContainer);
