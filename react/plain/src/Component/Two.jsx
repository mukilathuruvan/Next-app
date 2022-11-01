import React from 'react'

const Two = ({ count, setCount }) => {
  console.log("two is rendering")
  return (
      <div>
          <h2>{count}</h2>
          <button onClick={setCount}>Count</button>
    </div>
  )
}

export default Two