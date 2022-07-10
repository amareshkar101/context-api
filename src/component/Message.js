

import React, { useContext, useEffect, useReducer } from 'react'
import MessageContext from '../context/messageContext'

function Message() {

  const message=useContext(MessageContext)

  useEffect(()=>{
    message.update()
  },[])
  return (

    <div>
      <h1>I am {message.state.name}</h1>
    </div>
  )
}

export default Message


// useReducer()
// const initialState=0

// const reducer=(state,action)=>{
// if(action.type){

// }
// if(action.type){

// }
// return state
// }

// const [state,dispatch]=useReducer(reducer,initialState)

// dispatch({type:{})






// import React,{ useContext, useEffect } from 'react'
// import MessageContext from '../context/messageContext'



// function Message() {

//   const a=useContext(MessageContext)

//   useEffect(()=>{
//     a.update()
//   },[]) 
//   return (
//     <div>
//       <h1>I'm {a.state.name}</h1>
//     </div>
//   )
// }

// export default Message
