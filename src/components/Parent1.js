import { createContext } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
export const MyConstext = createContext ()

const Parent1 = () => {
  const message1 = "Hello from Parent1";
  const message2 = "Another message from Parent1";

  return (
    <MyConstext.Provider value={{message1, message2}}>
      <Child1/>
      <Child2/>
    </MyConstext.Provider>
    
  )
}

export default Parent1