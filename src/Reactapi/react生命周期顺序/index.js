import React, { Component } from 'react'

export default class Fu extends Component {
  componentDidMount() {
    console.log('Fu componentDidMount')
  }
  componentDidUpdate() {
    console.log('Fu componentDidUpdate')
  }

  state = {
    count: 0,
    showCpn1: true,
  }
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div onClick={this.changeCount}>
        {this.state.count}
        <Child count={this.state.count} />
        <button
          onClick={() => {
            this.setState({
              showCpn1: !this.state.showCpn1,
            })
          }}
        >
          切换显示cpn1/2
        </button>
        {this.state.showCpn1 ? <Cpn1 /> : <Cpn2 />}
      </div>
    )
  }
}

class Child extends Component {
  state = {
    num: 1,
  }
  changenum = () => {
    const { num } = this.state
    this.setState({ num: num + 1 })
  }
  componentDidMount() {
    console.log('Child componentDidMount')
  }
  componentDidUpdate() {
    console.log('Child componentDidUpdate')
  }
  render() {
    return <div onClick={this.changenum}>{this.state.num}</div>
  }
}

class Cpn1 extends Component {
  componentDidMount() {
    console.log('cpn1 didmount')
  }
  componentWillUnmount() {
    console.log('cpn1 unmount')
  }
  render() {
    return <div>cpn1</div>
  }
}
class Cpn2 extends Component {
  componentDidMount() {
    console.log('cpn2 didmount')
  }
  componentWillUnmount() {
    console.log('cpn2 unmount')
  }
  render() {
    return <div>cpn2</div>
  }
}
