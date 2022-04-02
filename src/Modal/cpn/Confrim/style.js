import styled from 'styled-components'
import { Mask, SafeArea } from '../styles'
import autobg from 'autobg.macro'
import vw from 'rpf/un/vw'
export const ConfrimWrapper = styled(Mask)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SafeBox = styled(SafeArea)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Wrap = styled.div`
  .content {
    ${(p) => p.type}
  }
  .close {
    margin-top: ${vw(20)};
    ${autobg('../../image/close.png')};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
