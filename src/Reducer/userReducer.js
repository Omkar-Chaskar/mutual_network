export function reducer(state, action) {
    switch (action.type) {
      case "SET_PERSON":
        return {
          ...state,
          [action.key]: action.value,
        };

      case "ADD_NEW_PERSON" :
        return {
          ...state,
          person: state.person.concat(action.value)
        }  
      
      case "CLEAR_PERSON" :
        return {
          ...state,
          "personname": "",
          "friendname": ""
        }

      case "SET_FIND_PERSON":
        return {
          ...state,
          [action.key]: action.value, 
        };

      default:
        return state;
    }
  }