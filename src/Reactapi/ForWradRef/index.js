import React, { useRef, forwardRef, useEffect } from 'react'

export default function Yeye() {
  const erziRef = useRef()
  useEffect(() => {
    console.log(erziRef.current)
  })
  return (
    <div>
      Yeye
      <BabaRef ref={erziRef} />
    </div>
  )
}

const BabaRef = forwardRef((props, Myref) => {
  return <Baba ErziRef={Myref} {...props} />
})

function Baba(prop) {
  return (
    <div>
      {/* <div ref={prop.ErziRef}> */}
      baba被抓到了 <br />
      <Erzi domRef={prop.ErziRef} />
    </div>
  )
}

function Erzi(prop) {
  return <div ref={prop.domRef}>erzi被抓到了</div>
}
