import { createContext } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
export const MyConstext = createContext ()

const Parent1 = () => {
  const {message, setMessage} = 'hello from parent'

  return (
    <MyConstext.Provider value={{message1: message, message2: setMessage}}>
      <Child1/>
      <Child2/>
    </MyConstext.Provider>
    
  )
}

export default Parent1