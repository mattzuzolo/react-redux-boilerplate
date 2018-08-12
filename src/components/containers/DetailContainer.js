import React, { Component } from 'react';
import { connect } from 'react-redux';


class DetailContainer extends Component {

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
