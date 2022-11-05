import React, { useState } from "react";
import Year from "./Year";
const msg = [
  { q: "how are you", ans: "I'm fine bro" },
  { q: "where are you", ans: "I'm at office" },
  { q: "whatsapp", ans: "nothing dude" },
  { q: "may i know your name", ans: "Iname is ragnar lathbhrok" },
  { q: "ok bye", ans: "bye bruh" },
];
const Layout = () => {
  const [text, setText] = useState("");
  const [out, setOut] = useState("");
  const handleClick = () => {
    // msg.forEach((item) => {
    //   if (item.q === text) {
    //     setOut(item.ans);
    //     return;
    //   }
    // });
    const ele = msg.find((item) => item.q === text);
    if (ele) {
      setOut(ele.ans);
    } else {
      setOut("invalid");
    }

    // setText("");
    // setOut("invalid");
  };
  return (
    <div>
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
      <br />
      <br />
      <textarea value={out} /> */}
      <Year />
    </div>
  );
};

export default Layout;
