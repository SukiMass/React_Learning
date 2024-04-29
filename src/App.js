import React, { useState } from "react";
import CounterUsingContext from "./CounterUsingContext";

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Counter App</h1>
      <br/><br/><br/>

      <h3>Value : {count} </h3>      
      <br/><br/>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </> */}
    <CounterUsingContext />
    </>
  );
}

export default App;
