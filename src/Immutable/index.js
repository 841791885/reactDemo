import React from 'react'

import { Map, Set } from 'immutable'
export default function Immutable() {
  const map = Map({ a: 1 })
  const set = Set([1, 3, 2])
  map.set('b', 2)
  console.log(map.get('b'))
  return (
    <>
      <div>a:map{map.get('a')}</div>
      <div>b:set{set}</div>
    </>
  )
}
