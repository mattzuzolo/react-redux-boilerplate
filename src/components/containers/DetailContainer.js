import React, { Component } from 'react';
import { connect } from 'react-redux';


class DetailContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
        headline: "",
        sourceLink: "",
        content: "",
        xCoord: 0,
        yCoord: 0,
        displayingMarker: false,
    }

  }


  onAnnotationSubmit = (event, formData) => {
    event.preventDefault();
    console.log("You submitted the form")
  }

  onInputChange = (event) => {
    event.persist();
    let fieldName = event.target.name;
    let currentValue = event.target.value;
    this.setState({ [fieldName]: currentValue })
  }

  onArtworkClick = (event) => {
    // console.log("You clicked some artwork", event)
    let currentTargetRect = event.currentTarget.getBoundingClientRect();
    let xCoord = event.pageX - currentTargetRect.left;
    let yCoord = event.pageY - currentTargetRect.top;

    this.setState({
      xCoord: xCoord,
      yCoord: yCoord,
      displayingMarker: true,
    })

  }
  // getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

  render(){
    // console.log("headline value: ", this.state.headline)
    // console.log("sourceLink value: ", this.state.sourceLink)
    // console.log("content value: ", this.state.content)
    console.log(`X/Y coords: ${this.state.xCoord} / ${this.state.yCoord}`);
    console.log("Is marker being displayed?", this.state.displayingMarker);
    return(
      <div>
        <div id="annotation-zone"  >

            { this.state.displayingMarker
                      ? <div id="annotation-marker"></div>
                      : null
                  }


          <img src={this.props.selectedArtwork.imageUrl} alt="" onClick={this.onArtworkClick}></img>
        </div>

        <h1>{this.props.selectedArtwork.title}</h1>
        <h3>{this.props.selectedArtwork.artist}</h3>
        <p>{this.props.selectedArtwork.medium} <br /><a href={this.props.selectedArtwork.url}>Read more here</a></p>

        <form onSubmit={(event) => this.onAnnotationSubmit(event)}>
          <label>Headline:</label>
          <input placeholder="headline here" name="headline" value={this.state.headline} onChange={this.onInputChange} ></input>

          <label>Link:</label>
          <input placeholder="source link here" name="sourceLink" value={this.state.sourceLink} onChange={this.onInputChange} ></input>

          <label>Annotation:</label>
          <textarea placeholder="share your annotation here" name="content" value={this.state.content} onChange={this.onInputChange} ></textarea>

          <button>Submit annotation</button>
        </form>
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


// {this.state.displayingMarker ? }
// <div id="annotation-marker"></div>
