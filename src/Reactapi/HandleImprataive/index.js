import React, { forwardRef, useRef, useImperativeHandle } from 'react'

export default function Fu() {
  const formRef = useRef()
  const focus = () => {
    console.log(formRef.current.value())
    formRef.current.focus()
    // formRef.current.focus()
  }
  return (
    <div>
      <button onClick={focus}>聚焦通过imprative聚焦表单表单</button>
      <br />
      <InputForm ref={formRef} />
    </div>
  )
}

const InputForm = forwardRef((props, ref) => {
  const innerRef = useRef()
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        innerRef.current.focus()
      },
      value: () => innerRef.current.value,
    }),
    [innerRef]
  )
  return (
    <input
      type="text"
      ref={innerRef}
      value="123"
      onChange={(e) => {
        console.log(e.target.value)
      }}
    ></input>
  )
})
