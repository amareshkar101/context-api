import MessageContext from "./messageContext"


import React, { useState } from 'react'

function MessageState(props) {

const initialState={
    "name":"Amaresh"
}

const [state,setState]=useState(initialState)

const update=()=>{
    setTimeout(()=>{
        setState({
            "name":"Kar"
        })
    },3000)
}




  return (
    <div>
    <MessageContext.Provider value={{state,update}}>
                {props.children}
        </MessageContext.Provider>

      
    </div>
  )
}

export default MessageState




























// import { useState } from "react"
// import MessageContext from "./messageContext"


// const MessageState = (props) => {

//     const s1={
//         "name":"amaresh"
//     }
//     const [state,setState]=useState(s1)
   
//     const update = ()=>{
//         setTimeout(()=>{
//             setState({
//                 "name":"kar"
//             })
//         },3000)
       
//     }
//     return (
//     <MessageContext.Provider value={{state,update}}>
//             {props.children}
//         </MessageContext.Provider>

//     )
// }

// export default MessageState