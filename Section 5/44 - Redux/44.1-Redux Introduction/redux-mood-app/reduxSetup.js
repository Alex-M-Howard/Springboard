const INITIAL_STATE = { mood: "¯\\_(⊙_ʖ⊙)_/¯" };

function moodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      return { ...state, mood: " : > ) "}
      
    case "SAD":
      return { ...state, mood: "( ཀ ʖ̯ ཀ)" };

    case "ANGRY":
      return { ...state, mood: "ಠ╭╮ಠ" };

    case "SLEEPY":
      return { ...state, mood: "(￣o￣) zzZ" };
    
    default:
      return state;
  }
}

const store = Redux.createStore(moodReducer);
