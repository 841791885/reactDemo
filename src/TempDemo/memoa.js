import React, { memo, useEffect } from 'react'

const memoa = memo(() => {
  useEffect(() => {
    console.log('memoa重新渲染')
  })
  return <div>memoa</div>
})

export default memoa
