import React, { useContext, useState } from 'react'
import CommonContext from './CommonContext'

const CounterUsingContext = () => {
  const {count, setCount} = useContext(CommonContext);

  return (
    <>
        <h1>CounterUsingContext</h1>
        <br/>

        <h3>Value : {count} </h3>      
      <br/><br/>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </>
  )
}

export default CounterUsingContext