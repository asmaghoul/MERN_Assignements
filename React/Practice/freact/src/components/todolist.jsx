import React from "react"

const list=["Learn React","Climb Mt. Everest","Run a Marathon","Feed the dogs" ]

const Todolist=() =>{
    return <ul>{list.map(elt =>{
        return <li key={elt} >{elt}</li>
    })}</ul>
}

export default Todolist