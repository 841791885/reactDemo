import vw from 'rpf/un/vw'
import styled from 'styled-components'

import { Mask, SafeArea } from '../styles'

export const LimitedWrapper = styled(Mask)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`

export const SafeBox = styled(SafeArea)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: ${vw(405)};
  height: ${vw(160)};
  border-radius: ${vw(15)};
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: ${vw(32)};
  font-weight: 700;
`
