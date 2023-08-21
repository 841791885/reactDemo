import {createContext,useContext,useState} from 'react'
const ValProvider = createContext()
function Ancestors() {
  const [state, setState] = useState(0)
  
  return <ValProvider.Provider value={{
    val: state,
    setVal: setState
  } }>Ancestors<Main/></ValProvider.Provider>
}

function Main() {
  return <div>
    Main
    <Child />
  </div>
}

function Child() {
  const {setVal} = useContext(ValProvider)
  return <div>Child<button onClick={() => {
    setVal(val => val + 1)
  }}>+2</button><Son /></div>
}
function Son() {
  const {val} = useContext(ValProvider)

  return <div>son:{val}</div>
}
export default Ancestors