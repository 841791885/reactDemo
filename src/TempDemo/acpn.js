import React, { useEffect } from 'react'
import { useStore } from './store'

export default function Acpn() {
  const { count, setCount } = useStore()
  useEffect(() => {
    console.log('Acpnrender')
  })
  return (
    <div
      onClick={() => {
        setCount(4)
      }}
    >
      A:{count}
    </div>
  )
}
