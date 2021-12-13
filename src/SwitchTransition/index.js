import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { SwitchTransitionWrapper, Globalcss } from './style'
export default function SawitchTransition() {
  const [isOn, setIsOn] = useState(true)
  return (
    <SwitchTransitionWrapper>
      <Globalcss />
      <SwitchTransition mode="out-in">
        <CSSTransition classNames="btn" timeout={500} key={isOn ? 'on' : 'off'}>
          {isOn ? <div>1231</div> : <div>45</div>}
        </CSSTransition>
      </SwitchTransition>
      <button
        onClick={() => {
          setIsOn(!isOn)
        }}
      >
        {isOn ? 'on' : 'off'}
      </button>
    </SwitchTransitionWrapper>
  )
}
