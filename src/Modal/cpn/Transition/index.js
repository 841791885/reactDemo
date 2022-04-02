import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { TransStyle } from '../styles'

export default function Transition({ children, open }) {
  return (
    open && (
      <>
        <TransStyle />
        <CSSTransition
          in={Boolean(open)}
          classNames={'modal'}
          timeout={300}
          unmountOnExit
        >
          {children}
        </CSSTransition>
      </>
    )
  )
}
