import React, { useEffect } from 'react'

export default function Childrena(props) {
  useEffect(() => {
    console.log('childrena 重新渲染')
  })
  return <div>Childrena</div>
}
