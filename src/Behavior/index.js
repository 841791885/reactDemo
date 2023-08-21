import React, { Component } from 'react'
import VerifyPoint from './verifyPoint'
import VerifySlide from './verifySlide'
import { getPicture, reqCheck } from '../services/base'

class Pages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      validateInfo: {},
    }
  }
  componentDidMount() {
    this.getPointData()
  }

  //传入获取组件信息的函数
  getPointData() {
    getPicture().then((res) => {
      if (res.code === 'S_OK') {
        this.setState({
          validateInfo: {
            wordList: res?.var?.wordList,
            baseDrawImg: res?.var?.originalImageBase64,
            blockDrawImg: res?.var?.jigsawImageBase64,
            token: res?.var?.token,
            secretKey: res?.var?.secretKey,
          },
        })
      }
    })
  }

  render() {
    return (
      <div>
        {/* <VerifySlide
          barSize={{
            width: '40px',
            height: '40px',
          }}
          setSize={{
            imgHeight: 200,
            imgWidth: 310,
          }}
          refreshFn={() => {
            console.log('点击了刷新')
            this.getPointData()
          }}
          validateInfo={this.state.validateInfo}
          successFn={() => {
            console.log('验证完成可以关了')
          }}
          validateFn={reqCheck}
        /> */}
        <VerifyPoint
          barSize={{
            width: '310px',
            height: '30px',
          }}
          setSize={{
            imgHeight: 110,
            imgWidth: 279,
          }}
          validateInfo={this.state.validateInfo}
          validateFn={reqCheck}
          refreshFn={() => {
            this.getPointData()
          }}
          successFn={() => {
            console.log('验证完成可以关了')
          }}
        />
      </div>
    )
  }
}

export default Pages
