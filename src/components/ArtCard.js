import React, { Component } from 'react';

class ArtCard extends Component {
  render(){
    // console.log("Artcard props", this.props.artwork)
    return(
      <div onClick={(event) => this.props.onClickArtwork (event, this.props.artwork)} className="div--art-card">
        <img src={this.props.imageUrl} alt="thumbail"></img>
        <h1>{this.props.title}</h1>
        <h3>{this.props.artist}</h3>
      </div>
    );
  }
}

export default ArtCard;
