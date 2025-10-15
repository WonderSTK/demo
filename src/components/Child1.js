import React, { useContext } from 'react'
import { MyConstext } from './Parent1'

const Child1 = () => {
    const {message1} = useContext(MyConstext);
  return (
    
    <div>
        <h1>this is message from parent </h1>
        <div>{message1}</div>
    </div>
  )
}

export default Child1