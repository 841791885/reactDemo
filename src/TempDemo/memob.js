import React, { memo, useEffect } from 'react'

const memob = memo(() => {
  useEffect(() => {
    console.log('memob重新渲染')
  })
  return <div>memob</div>
})

export default memob
