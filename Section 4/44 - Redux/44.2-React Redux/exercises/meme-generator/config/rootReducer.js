const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, memes: [...state.memes, action.payload] };

    case "DELETE":
      return { ...state, memes: [] };

    default:
      return state;
  }
}

export default rootReducer;
