import React, { PureComponent } from 'react'
import Store from '../store'

//comsumer使用仓库值
export default class CreateContextAPiClass extends PureComponent {
  render() {
    return (
      <Store.Provider value="ssss123">
        <Store.Consumer>{(store) => <div>{store}</div>}</Store.Consumer>
      </Store.Provider>
    )
  }
}
