import React, { Component } from 'react';

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
    return(
      <div>
        <div id="annotation-zone">
          <img src={this.state.tempArt.imageUrl} alt=""></img>
        </div>
        <h1>{this.state.tempArt.title}</h1>
        <h3>{this.state.tempArt.artist}</h3>
        <p>{this.state.tempArt.medium} <br /><a href={this.state.tempArt.url}>Read more here</a></p>
      </div>
    )
  }

}

export default DetailContainer
