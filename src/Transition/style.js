import styled, { createGlobalStyle, css } from 'styled-components'

export const TransitionWrapper = styled.div.attrs({
  className: 'bgcolor',
})`
  position: relative;
  width: 500px;
  height: 500px;
  margin: 120px auto;
  .btnfix {
    position: absolute;
    left: 0;
    top: 0;
  }
`

const WHBox = css`
  width: 200px;
  height: 200px;
  margin: 100px auto;
`

export const TransitionContent1 = styled.div`
  ${WHBox}
  background-color:${(props) => props.color}
`

export const TransitionContent2 = styled.div`
  ${WHBox}
  background-color:red
`

export const Globalcss = createGlobalStyle`
 .bgcolor{ background-color: transparent;
  }
.my-node-enter {
  transform:translateX(200px);
  opacity:0
}
.my-node-enter-active {
  opacity: 1;
  transform:translateX(0px);
  transition: all 2000ms;
}
/* .my-node-enter-done {
  opacity: 1;
  transform:translateX(-0);
} */
.my-node-exit {
  opacity: 1;
  transform:translateX(0px);
}
.my-node-exit-active {
  opacity: 0;
  transform:translateX(-200px);
  transition: all 2000ms;
}
/* .my-node-exit-done {
  opacity: 1;
  transform:translateX(0);
} */
`
