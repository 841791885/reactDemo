import React, { useEffect } from 'react'
import Transition from '../Transition'

import { LimitedWrapper, SafeBox, Wrap } from './style'
export default function Limite({ open, onClose, type }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [open])

  return (
    <Transition open={open}>
      <LimitedWrapper opacity={0}>
        <SafeBox>
          <Wrap>
            {type === 'repeat' ? (
              <div className="content">
                您已经投过票啦~
                <br />
                明天再来给TA加油吧
              </div>
            ) : type === 'faild' ? (
              <div>今天已经投过票啦，明天再来吧~</div>
            ) : type === 'success' ? (
              <div className="content">
                投票成功~
                <br />
                谢谢您的参与
              </div>
            ) : type === 'noresult' ? (
              <div className="content">
                很抱歉
                <br />
                未找到您的搜索相关结果
                <br />
                试试其他关键词吧!
              </div>
            ) : (
              <div className="content">投票已结束~</div>
            )}
          </Wrap>
        </SafeBox>
      </LimitedWrapper>
    </Transition>
  )
}
