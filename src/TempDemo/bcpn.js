import React from 'react'
import { useStore } from './store'

export default function Bcpn() {
  const { count, setCount } = useStore()
  return (
    <div
      onClick={() => {
        setCount(7)
      }}
    >
      b:{count}
    </div>
  )
}
