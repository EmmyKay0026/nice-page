import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Counter = () => {
    const counter = useSelector((state)=> state.counter)
    const  dispatch = useDispatch()


    const increase = () =>{
        dispatch({type:'INC'})
    }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>

      <button onClick={increase}>Increase</button>
    </div>
  )
}


