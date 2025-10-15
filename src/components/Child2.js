
import React, { useContext } from 'react'
import { MyContext } from './Parent1'

const Child2 = () => {
  const { message2 } = useContext(MyContext)
  return (
    <div>
      <p>This is Child2 component.</p>
      <div>{message2}</div>
    </div>
  )
}

export default Child2
