import React, { useState, useEffect, memo } from 'react'
import { useLatest } from 'ahooks'

export default memo(function LatestDemo() {
  const [count, setCount] = useState(0)

  const latestCountRef = useLatest(count)
  console.log('我执行了')
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  console.log(latestCountRef)
  return (
    <>
      <p>count: {count}</p>
    </>
  )
})
