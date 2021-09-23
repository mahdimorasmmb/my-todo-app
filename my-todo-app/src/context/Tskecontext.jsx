import React, { createContext, useReducer } from "react";
import taskeReducer from "../redocers/taskeReducer";

export const Tskecontext = createContext();

export default function TskeContextProvider({ children }) {
  const [task, dispatch] = useReducer(taskeReducer, "");
  return (
    <Tskecontext.Provider value={{ task, dispatch }}>
      {children}
    </Tskecontext.Provider>
  );
}
