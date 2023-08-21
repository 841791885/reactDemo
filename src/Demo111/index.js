import React, { cloneElement } from 'react'
import Cpn from './Cpn'

export default function Demo() {
  return (
    <div>Demo:
      {
        cloneElement(<Cpn  name="456"/>, { name: '123' },<div>123</div>)
      }
    </div>
  )
}
