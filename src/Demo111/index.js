import React, { useEffect, useState } from 'react'

const a = [2, 3, 42, 3, 2, 2, 4, 4, 2]

const b = a.reduce((acc, item, i) => {
  console.log('acc', acc)
  console.log('item', item)
  console.log(i, 'i')
  console.log(a.indexOf(item), '-----')
  return [].concat(acc, a.indexOf(item) === i ? item : [])
})
console.log(b)

export default function Demo111() {
  const [num1, setNum1] = useState(1)
  const [num2, setNum2] = useState(1)
  useEffect(() => {
    console.log('a change')
  }, [num1])
  useEffect(() => {
    console.log('b change')
  }, [num2])

  return (
    <div
      onClick={() => {
        setNum1((a) => a + 1)
      }}
    >
      123
    </div>
  )
}
