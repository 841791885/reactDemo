import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import Confrim from './cpn/Confrim'
import Limited from './cpn/Limited'
import Rule from './cpn/Rule'

const store = {
  setState: () => {},
}
const Modal = {
  open: (key, props) => {
    store.setState((s) => {
      return {
        ...s,
        [key]: {
          ...props,
          open: true,
        },
      }
    })
  },
  close: (key) => {
    store.setState((s) => {
      return {
        ...s,
        [key]: {
          ...s[key],
          open: false,
        },
      }
    })
  },
}

const ModalRoot = () => {
  // toast  Modal的key
  // { open: false }  Modal的props
  const [state, setState] = useState({
    //time持续时间  没有按钮 默认两秒
    limited: { open: false, type: '' },
    //一个按钮
    confirm: { open: false, type: '' },
    //两个按钮
    exchange: { open: false },
    rule: { open: false },
    rank: { open: false, rankMsg: [] },
  })

  useEffect(() => {
    store.setState = setState
  }, [])

  return (
    <>
      <Limited
        {...state.limited}
        onClose={() => {
          Modal.close('limited')
        }}
      />
      <Confrim
        {...state.confirm}
        onClose={() => {
          Modal.close('confirm')
        }}
      />

      <Rule
        {...state.rule}
        onClose={() => {
          Modal.close('rule')
        }}
      />
    </>
  )
}

const $root = document.createElement('div')
document.body.appendChild($root)
ReactDOM.render(<ModalRoot />, $root)

export default Modal
