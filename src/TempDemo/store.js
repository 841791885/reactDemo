import { useState } from 'react'
export const useStore = () => {
  const [count, setCount] = useState(0)
  return { count, setCount }
}
