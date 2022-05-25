import React, { useCallback, useState } from 'react'
import ChildrenA from './childrena'
import ChildrenB from './childrenb'
import MemoB from './memob'
import MemoA from './memoa'
export default function TempDemo() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const setNum2Cb = useCallback(() => {
    setNum2(num2 + 1)
  }, [num2])
  return (
    <div>
      num1: {num1}
      <button
        onClick={() => {
          setNum1((num1) => num1 + 1)
        }}
      >
        num1:+1
      </button>
      <br />
      num2: {num2}
      <button
        onClick={() => {
          setNum2((num2) => num2 + 1)
        }}
      >
        num2:+1
      </button>
      <ChildrenA num1={num1} />
      <MemoA num1={num1} />
      <ChildrenB setNum1Cb={setNum2Cb} />
      <MemoB setNum1Cb={setNum2Cb} />
    </div>
  )
}
