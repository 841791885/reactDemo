import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg)

}
`

export const KeyframsWrapper = styled.div`
  width: 500px;
  height: 500px;
  margin: 100px auto;
  background-color: pink;
  animation: ${rotate} 2s linear infinite;
`
