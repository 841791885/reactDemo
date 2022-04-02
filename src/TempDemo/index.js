import React, { Component } from 'react'

export default class TempDemo extends Component {
  state = {
    arrList: [
      { id: 1, isSelect: false, num: 0, type: 1 },
      { id: 2, isSelect: false, num: 0, type: 1 },
      { id: 3, isSelect: false, num: 0, type: 1 },
      { id: 4, isSelect: false, num: 0, type: 1 },
      { id: 5, isSelect: false, num: 0, type: 1 },
      { id: 6, isSelect: false, num: 0, type: 2 },
      { id: 7, isSelect: false, num: 0, type: 2 },
      { id: 8, isSelect: false, num: 0, type: 2 },
      { id: 9, isSelect: false, num: 0, type: 2 },
      { id: 10, isSelect: false, num: 0, type: 2 },
    ],
    all: [],
    proxy: [],
    tagNum: 0,
  }
  componentDidMount() {
    const { arrList } = this.state
    const allArr = arrList.filter((item) => item.type === 1)
    const proxyArr = arrList.filter((item) => item.type === 2)
    this.setState({
      all: allArr,
      proxy: proxyArr,
    })
  }

  checkboxChange(value, index, type) {
    console.log('当前类型', type)
    const { all, proxy } = this.state
    console.log('all', all)
    console.log('proxy', proxy)

    const newAll = [...all]
    const newProxy = [...proxy]

    if (type === 1) {
      newAll[index].isSelect = value
      const newArrList = [...newAll, ...newProxy]
      const selectedNum = newArrList.filter((item) => item.isSelect).length
      newAll[index].isSelect = value

      const compare = newAll[index].num
      if (value) {
        newAll[index].num = selectedNum
        const newArrList = [...newAll, ...newProxy]
        this.setState({
          arrList: newArrList,
          all: newAll,
          tagNum: selectedNum,
        })
      } else {
        const finalAll = newAll.map((item) => {
          if (item.num > compare) {
            return { ...item, num: item.num - 1 }
          } else {
            return item
          }
        })
        console.log(finalAll, 'finalAll')
        const finalProxy = newProxy.map((item) => {
          if (item.num > compare) {
            return { ...item, num: item.num - 1 }
          } else {
            return item
          }
        })
        const finalArrlist = [...finalAll, ...finalProxy]
        this.setState({
          arrList: finalArrlist,
          tagNum: selectedNum,
          all: finalAll,
          proxy: finalProxy,
        })
      }
    } else if (type === 2) {
      newProxy[index].isSelect = value
      const newArrList = [...newAll, ...newProxy]
      const selectedNum = newArrList.filter((item) => item.isSelect).length
      const compare = newAll[index].num
      if (value) {
        newProxy[index].num = selectedNum
        const newArrList = [...newAll, ...newProxy]
        this.setState({
          arrList: newArrList,
          proxy: newProxy,
          tagNum: selectedNum,
        })
      } else {
        const finalAll = newAll.map((item) => {
          if (item.num > compare) {
            return { ...item, num: item.num - 1 }
          } else {
            return item
          }
        })
        const finalProxy = newProxy.map((item) => {
          if (item.num > compare) {
            return { ...item, num: item.num - 1 }
          } else {
            return item
          }
        })
        const finalArrlist = [...finalAll, ...finalProxy]
        this.setState({
          arrList: finalArrlist,
          tagNum: selectedNum,
          all: finalAll,
          proxy: finalProxy,
        })
      }
    }

    // const newArr = [...arrList]
    // newArr[index].isSelect = value
    // const selectNum = newArr.filter((item) => item.isSelect).length
    // const compare = newArr[index].num
    // if (value) {
    //   newArr[index].num = selectNum
    //   this.setState({
    //     arrList: newArr,
    //     tagNum: selectNum,
    //   })
    // } else {
    //   const resultArr = newArr.map((item) => {
    //     if (item.num > compare) {
    //       return { ...item, num: item.num - 1 }
    //     } else {
    //       return item
    //     }
    //   })
    //   this.setState({
    //     arrList: resultArr,
    //     tagNum: selectNum,
    //   })
    // }
  }
  render() {
    const { tagNum, all, proxy } = this.state
    return (
      <div>
        {/* {arrList.map((item, index) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.isSelect}
              onChange={({ target: { checked } }) =>
                this.checkboxChange(checked, index)
              }
            />
            {item.num}当前标识符:{tagNum}
          </div>
        ))} */}
        客户
        <br />
        {all.map((item, index) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.isSelect}
              onChange={({ target: { checked } }) =>
                this.checkboxChange(checked, index, item.type)
              }
            />
            {item.num}当前标识符:{tagNum}
          </div>
        ))}
        <br />
        代理人
        {proxy.map((item, index) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.isSelect}
              onChange={({ target: { checked } }) =>
                this.checkboxChange(checked, index, item.type)
              }
            />
            {item.num}当前标识符:{tagNum}
          </div>
        ))}
      </div>
    )
  }
}
