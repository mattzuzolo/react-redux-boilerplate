const defaultState = {
  artworkArray: [],
  selectedArtwork: {},
  // testString: "this is a test string defined in the default state."
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
