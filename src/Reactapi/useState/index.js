import React, { useEffect, useState } from 'react'
const storeObj = {
  setState: () => {},
}
export default function UseState({ aaa = 'aa' }) {
  const [num, setNum] = useState(0)
  useEffect(() => {
    storeObj.setState = setNum
  }, [])
  return (
    <div>
      {num}
      <button
        onClick={() => {
          console.log(storeObj, '1')
          // storeObj.setState(3)
          setNum((s, b) => {
            console.log(s)
            console.log(b)
            return 3
          })
          console.log(setNum, '2')
        }}
      >
        +3
      </button>
    </div>
  )
}
