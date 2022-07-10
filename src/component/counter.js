import React, { useReducer } from 'react'

function Counter() {

    const initialState=0
    const reducer=(state,action)=>{
        if(action.type==="INCREMENT")
        {
            return state+1
        }
        if(action.type==="DECREMENT")
        {
            return state-1
        }
        return state

    }

    const [state,dispatch]=useReducer(reducer,initialState)

    
  return (
    <div>
      <h1>{state}</h1>
      <div>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"})
        }} >INCREMENT</button>
        <button onClick={()=>{
            dispatch({type:"DECREMENT"})
        }}>DECREMENT</button>
      </div>
    </div>
  )
}

export default Counter
