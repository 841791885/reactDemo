import React from 'react'
import Transition from '../Transition'
import autobg from 'autobg.macro'

import { ConfrimWrapper, SafeBox, Wrap } from './style'
export default function Confrim({ open, onClose, type }) {
  const iconMap = {
    network: autobg('../../image/netErr.png'),
    api: autobg('../../image/apiErr.png'),
  }
  return (
    <Transition open={open}>
      <ConfrimWrapper>
        <SafeBox>
          <Wrap type={iconMap?.[type]}>
            <div className="content"></div>
            <div className="close" onClick={onClose} />
          </Wrap>
        </SafeBox>
      </ConfrimWrapper>
    </Transition>
  )
}
