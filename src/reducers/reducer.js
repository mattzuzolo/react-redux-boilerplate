const defaultState = {
  artworkArray: [],
  testString: "this is a test string defined in the default state."
}

export default function(state = defaultState, action) {
  console.log("Action before switch", action)

  switch(action.type){
    case "UPDATE_ARTWORK_ARRAY":
      return {...state, artworkArray: action.payload}
    case "CHANGE_MESSAGE":
      return {testString: action.payload}

    default:
      return state
  }
}
