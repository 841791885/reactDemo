import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { TransitionWrapper, Globalcss, TransitionContent1 } from './style'
export default function Transitino() {
  const [inProp, setInProp] = useState(false)
  const [repeat, setRepeat] = useState(false)

  return (
    <>
      <Globalcss></Globalcss>

      <TransitionWrapper>
        <CSSTransition
          //in为true是进入  false是退出动画
          in={inProp}
          //整个动画的持续时间
          timeout={2000}
          //给动画类的前缀1
          classNames="my-node"
          // 动画结束后是否display:none
          unmountOnExit={true}
          //首次进入是否要动画 需要配合in为true一起使用
          appear={true}
          onEnter={() => {
            console.log('进入动画前')
          }}
          onEntering={() => {
            console.log('进入动画时')
          }}
          onEntered={() => {
            console.log('进入动画结束后')
            setRepeat(false)
          }}
          onExit={() => {
            console.log('退出动画结束前')
          }}
          onExiting={() => {
            console.log('退出动画结束时')
          }}
          onExited={() => {
            console.log('退出动画结束后')
            setRepeat(false)
          }}
        >
          <TransitionContent1
            color={inProp ? '#bfa' : 'red'}
          ></TransitionContent1>
        </CSSTransition>
        <button
          className="btnfix"
          type="button"
          onClick={() => {
            if (repeat) {
              return
            }
            setInProp(!inProp)
            setRepeat(true)
          }}
        >
          {inProp.toString()}
        </button>
      </TransitionWrapper>
    </>
  )
}
