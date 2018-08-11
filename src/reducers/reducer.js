const defaultState = {
  artworkArray: [{
_id: "5b6bbda3e93e040014c68839",
title: "Wanderer Above the Sea of Fog",
artist: "Caspar David Friedrich",
medium: "Oil on canvas",
century: "19th Century",
culture: "German",
url: "https://en.wikipedia.org/wiki/Wanderer_above_the_Sea_of_Fog",
imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
apiId: 315,
__v: 0
}],
  // testString: "this is a test string defined in the default state."
}

export default function(state = defaultState, action) {
  // console.log("Action before switch", action)

  switch(action.type){
    case "UPDATE_ARTWORK_ARRAY":
      return {...state, artworkArray: [...state.artworkArray, ...action.payload.artwork]}

    case "CHANGE_MESSAGE":
      return {testString: action.payload}
    default:
      return state
  }
}
