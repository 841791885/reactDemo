import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
export default function StyleButton() {
  return (
    <div>
      <NewStyleButton>styleButton</NewStyleButton>
    </div>
  )
}

const NewStyleButton = styled(Button).attrs({
  type: 'primary',
})``
