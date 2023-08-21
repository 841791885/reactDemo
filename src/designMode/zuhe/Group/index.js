import React,{Reducer} from 'react'

export default function Group({ children }) {
  console.log(React.cloneElement, '123123')
  console.log(children, 'chirderne') // Groups element
  React.Children.forEach(children, (item) => {
    console.log(item.props, 'props') //依次打印 props
  })
  // const newChild = cloneElement(children, { tag: 'ttag' })
  return children
}
