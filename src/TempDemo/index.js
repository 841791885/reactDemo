import { use } from 'echarts'
import React from 'react'
import Acpn from './acpn'
import Bcpn from './bcpn'
import { TempDemoWrapper } from './style'
export default function TempDemo() {
  return (
    <TempDemoWrapper>
      <Acpn />
      <Bcpn />
    </TempDemoWrapper>
  )
}
