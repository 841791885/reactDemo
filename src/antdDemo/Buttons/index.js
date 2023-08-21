import React from 'react'
import { Button } from 'antd'

export default function AntdButton() {
  return (
    <div>
      type类型
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <TChar></TChar>
      <TChar>1</TChar>
      <TChar>23</TChar>
    </div>
  )
}

function TChar({ children }) {
  React.Children.forEach(children, function (...rest) {
    console.log(rest, '333')
  })
  return <div>123</div>
}
