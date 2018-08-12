const defaultState = {
  artworkArray: [],
  selectedArtwork: {
_id: "5b6bbda3e93e040014c68834",
title: "Haystacks (Effect of Snow and Sun)",
artist: "Claude Monet",
medium: "Oil on canvas",
century: "19th Cenutry",
culture: "French",
url: "https://www.metmuseum.org/art/collection/search/437122",
imageUrl: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1035.jpg",
apiId: 487,
__v: 0
},
}

export default function(state = defaultState, action) {
  // console.log("Action before switch", action)

  switch(action.type){
    case "UPDATE_ARTWORK_ARRAY":
      return {...state, artworkArray: [...state.artworkArray, ...action.payload.artwork]}

    case "CHANGE_MESSAGE":
      return {testString: action.payload}

      case "SELECT_ARTWORK":
        return {...state, selectedArtwork: action.payload}

    default:
      return state
  }
}
