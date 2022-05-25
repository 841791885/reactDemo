import React, { useEffect } from 'react'

export default function Childrenb(props) {
  useEffect(() => {
    console.log('childrenb 重新渲染')
  })
  return <div>Childrenb</div>
}
