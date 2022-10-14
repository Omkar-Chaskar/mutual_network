import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/userReducer";

const PersonContext = createContext();

const PersonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { person: [] });

  return (
    <PersonContext.Provider value={{ state, dispatch }}>
      {children}
    </PersonContext.Provider>
  );
};

const usePerson = () => useContext(PersonContext);
export { PersonProvider, usePerson };