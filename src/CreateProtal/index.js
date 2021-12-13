import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import { DialogWrapper } from './style'

export default function CreateProtal() {
  const [content, setContent] = useState(new Date().toString())
  const [dialogVisible, setDialogVisible] = useState(false)

  const div = document.getElementById('modal')
  document.body.appendChild(div)
  return (
    <div>
      {createPortal(
        <Dialog
          visible={dialogVisible}
          content={content}
          close={() => {
            setDialogVisible(false)
          }}
        >
          {content}
        </Dialog>,
        div
      )}
      <button
        onClick={() => {
          setContent(new Date().toString())
          setDialogVisible(true)
        }}
      >
        弹出消息
      </button>
    </div>
  )
}

const Dialog = (props) =>
  props.visible && (
    <DialogWrapper>
      <div className="container">
        <div className="content">{props.content}</div>
        <div
          className="btn"
          onClick={() => {
            props.close()
          }}
        >
          关闭
        </div>
      </div>
    </DialogWrapper>
  )
