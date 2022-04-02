import React, { Component } from 'react'
import _ from 'lodash'

export default class DebounceLoadsh extends Component {
  state = {
    num: 0,
  }
  numadd() {
    const { num } = this.state
    this.setState({
      num: num + 1,
    })
  }

  debounceFn = _.debounce(this.numadd, 300)
  render() {
    return (
      <div>
        <div
          onClick={() => {
            this.debounceFn()
          }}
        >
          {this.state.num}
        </div>
      </div>
    )
  }
}
