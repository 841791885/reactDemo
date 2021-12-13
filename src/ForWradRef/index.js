import React, { createRef } from 'react'

//ForwardRef用法
function Son(props) {
  const { grandRef } = props
  return (
    <div>
      <div> i am alien </div>
      <span ref={grandRef}>这个是想要获取元素</span>
    </div>
  )
}

class Father extends React.Component {
  render() {
    return (
      <div>
        <Son grandRef={this.props.grandRef} />
      </div>
    )
  }
}

const NewFather = React.forwardRef((props, ref) => (
  <Father grandRef={ref} {...props} />
))

export default class GrandFather extends React.Component {
  componentDidMount() {
    console.log(this.nodeRef)
  }
  render() {
    const nodeRef = createRef()

    return (
      <div>
        <NewFather ref={nodeRef} />
      </div>
    )
  }
}
