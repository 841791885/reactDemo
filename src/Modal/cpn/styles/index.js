import styled, { createGlobalStyle, keyframes } from 'styled-components'
import vw from 'rpf/un/vw'

// 遮罩层
export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(p) => `rgba(0, 0, 0, ${p.opacity})`};
  z-index: ${(p) => p.zindex};
`
Mask.defaultProps = {
  opacity: 0.8,
  zindex: 9,
}

// 弹窗渐入渐出
export const TransStyle = createGlobalStyle`
.modal-enter {
  opacity: 0;
  /* > .modal_wrap {
    transform: translate3d(0, 100%, 0);
  } */
}
.modal-enter-active {
  opacity: 1;

  transition: all 300ms;
  /* > .modal_wrap {
    transform: translate3d(0, 0, 0);
    transition: all 300ms;
  } */
}
.modal-exit {
  opacity: 1;
  /* > .modal_wrap {
    transform: translate3d(0, 0, 0);
  } */
}
.modal-exit-active {
  opacity: 0;
  transition: all 300ms;
  /* > .modal_wrap {
    transform: translate3d(0, 100%, 0);
    transition: all 300ms;
  } */
}
`

// 安全区域
export const SafeArea = styled.div`
  position: relative;
  width: ${vw(750)};
  height: ${(p) => vw(p.maxHeight)};
  @media (min-aspect-ratio: 750 / ${(p) => p.maxHeight}) {
    height: 100%;
  }
`
SafeArea.defaultProps = {
  maxHeight: 1206,
}

//闪烁动画
export const twinkle = keyframes`
  0%{
  opacity:0;
  }
  50%{
    opacity:1;
  }
  100%{
    opacity:0;
  }
`

//放大缩小
export const Scale = keyframes`

0%{
  transform:scale(1)
}

25%{
  transform:scale(1.05)
}

50%{
  transform:scale(1.1)
}

75%{
  transform:scale(1.05)
}

100%{
  transform:scale(1)
}
/* 
100%{
  transform:scale(1.1)
} */

`
