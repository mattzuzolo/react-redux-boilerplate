import React, { Component } from 'react';

class ArtCard extends Component {
  render(){
    return(
      <div className="div--art-card">
        <img src={this.props.imageUrl} alt="thumbail"></img>
        <h1>{this.props.title}</h1>
        <h3>{this.props.artist}</h3>
      </div>
    );
  }
}

export default ArtCard;
