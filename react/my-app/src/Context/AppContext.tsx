import React, { useState } from "react";
import { contextValueType } from "./AllTypes";
const Context = React.createContext<null>(null);
const AppContext = () => {
  const [person, setPerson] = useState({} as contextValueType);
  const addPerson = () => {};
  return (
    <Context.Provider value={null}>
      <input
        type="text"
        value={person.fname}
        onChange={(w) => setPerson({ ...person, fname: w.target.value })}
      />
      <input
        type="text"
        value={person.lname}
        onChange={(e) => setPerson({ ...person, lname: e.target.value })}
      />
      <input
        type="text"
        value={person.course}
        onChange={(e) => setPerson({ ...person })}
      />
    </Context.Provider>
  );
};

export default AppContext;
