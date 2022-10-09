import React, { useState } from "react";

const InputCompo = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name.length <= 4 && name.length > 0 && <em>week</em>}
      {name.length <= 6 && name.length > 4 && <em>normal</em>}
      {name.length > 6 && <em>strong</em>}
      <button disabled={name.length === 0}>add</button>
    </div>
  );
};

export default InputCompo;
