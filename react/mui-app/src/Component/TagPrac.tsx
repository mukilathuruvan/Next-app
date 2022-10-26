import React, { useState } from "react";

const TagPrac = () => {
  const [rank, setRank] = useState(0);
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setRank(100);
  };
  return (
    <div>
      {/* <table style={{ width: "400px" }}>
        <caption>Persons Table</caption>
        <thead>
          <th>Name</th>
          <th>Age</th>
        </thead>
        <tbody>
          <tr>
            <td>akil</td>
            <td>19</td>
          </tr>
          <tr>
            <td>ajith</td>
            <td>21</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>total</td>
            <td>age total</td>
          </tr>
        </tfoot>
      </table> */}
      <p>
        {" "}
        you are <progress value={rank} max="100"></progress>
      </p>
      <form action="">
        <input type="text" />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default TagPrac;
