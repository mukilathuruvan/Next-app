import React, { createContext, useState } from "react";
export const NameContext = createContext();

const Context = ({ children }) => {
  const [name, setName] = useState("manfree");
  return <NameContext.Provider value={name}>{children}</NameContext.Provider>;
};

export default Context;
