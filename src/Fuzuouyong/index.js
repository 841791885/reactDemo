import React, { useState, useEffect } from 'react'

export default function Fuzuoyong() {
  const [obj, setObj] = useState({ num: 0 })

  useEffect(() => {
    console.log('obj改变了')
  }, [obj])
  const onClick11 = () => {
    setObj({ num: obj.num + 1 })
  }
  return (
    <div
      onClick={onClick11}
      style={{
        width: 300,
        height: 300,
        backgroundColor: '#bfa',
        textAlign: 'center',
        lineHeight: '300px',
      }}
    >
      {obj.num}
    </div>
  )
}
