import React, { Component } from 'react'
import defaultImg from '../assets/img/default.jpg'

class VerifyPoints extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secretKey: '', //后端返回的ase加密秘钥
      fontPos: [], //选中的坐标信息
      checkPosArr: [], //用户点击的坐标
      num: 1, //点击的记数
      pointBackImgBase: '', //后端获取到的背景图片
      poinTextList: [], //后端返回的点击字体顺序
      tempPoints: [],
      barAreaColor: 'rgb(0,0,0)',
      barAreaBorderColor: 'rgb(221, 221, 221)',
      showRefresh: true,
      bindingClick: true,
      text: '',
    }
  }

  componentDidUpdate(preProps) {
    if (
      preProps.validateInfo?.wordList?.toString() !==
      this.props.validateInfo?.wordList?.toString()
    ) {
      this.tipText()
    }
  }

  // 刷新
  refresh() {
    this.props.refreshFn()
    this.setState({
      num: 1,
      tempPoints: [],
      bindingClick: true,
      barAreaColor: 'rgb(0,0,0)',
      barAreaBorderColor: 'rgb(221, 221, 221)',
    })
  }

  canvasClick = (e) => {
    if (this.state.bindingClick) {
      this.state.tempPoints.push(this.getMousePos(e))
      this.setState({
        tempPoints: this.state.tempPoints,
      })
      if (this.state.num === this.props?.validateInfo?.wordList.length) {
        this.setState({
          bindingClick: false,
        })
        const checkPosArr = this.pointTransfrom(
          this.state.tempPoints,
          this.props.setSize
        )
        const data = {
          captchaType: 'clickWord',
          pointJson: JSON.stringify(checkPosArr),
          token: this.props.validateInfo.token,
          secretKey: this.props.validateInfo.secretKey,
        }
        this.props.validateFn(data).then((res) => {
          if (res.code === 'S_OK') {
            this.setState({
              text: '验证成功',
              barAreaColor: '#4cae4c',
              barAreaBorderColor: '#5cb85c',
            })
            setTimeout(() => {
              this.props.successFn()
              this.refresh()
            }, 1500)
          } else {
            this.setState({
              text: '验证失败',
              barAreaColor: '#d9534f',
              barAreaBorderColor: '#d9534f',
            })
            setTimeout(() => {
              this.refresh()
            }, 1500)
          }
        })
      }
      if (this.state.num < this.props?.validateInfo?.wordList.length) {
        this.createPoint(this.getMousePos(e))
        this.setState({
          num: this.state.num++,
        })
      }
    }
  }
  //获取坐标
  getMousePos = (e) => {
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY
    return { x, y }
  }
  // 创建坐标点
  createPoint = () => {
    const num = this.state.num++
    this.setState({
      num,
    })
  }

  //坐标转换函数
  pointTransfrom = (pointArr, imgSize) => {
    const newPointArr = pointArr.map((p) => {
      const x = Math.round((310 * p.x) / parseInt(imgSize.imgWidth))
      const y = Math.round((155 * p.y) / parseInt(imgSize.imgHeight))
      return { x, y }
    })
    return newPointArr
  }
  //展示提示文本内容
  tipText() {
    const { validateInfo } = this.props
    this.setState({
      text: validateInfo?.wordList?.toString(),
    })
  }
  render() {
    const tempPoints = this.state.tempPoints
    const { vSpace, barSize, setSize, validateInfo } = this.props
    const { barAreaBorderColor, barAreaColor } = this.state
    return (
      <div style={{ position: 'relative' }}>
        <div
          className="verify-img-out"
          style={{ height: parseInt(setSize.imgHeight) + vSpace }}
        >
          <div
            className="verify-img-panel"
            style={{
              width: setSize.imgWidth + 'px',
              height: setSize.imgHeight + 'px',
              backgroundSize:
                setSize.imgWidth + 'px' + ' ' + setSize.imgHeight + 'px',
              marginBottom: vSpace + 'px',
            }}
          >
            <div
              className="verify-refresh"
              style={{ zIndex: 3 }}
              onClick={() => {
                this.refresh()
              }}
            >
              <i className="iconfont icon-refresh"></i>
            </div>
            {validateInfo.baseDrawImg ? (
              <img
                src={'data:image/png;base64,' + validateInfo.baseDrawImg}
                alt=""
                style={{ width: '100%', height: '100%', display: 'block' }}
                onClick={($event) => this.canvasClick($event)}
              />
            ) : (
              <img
                src={defaultImg}
                alt=""
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
            )}

            {tempPoints.map((tempPoint, index) => {
              return (
                <div
                  key={index}
                  className="point-area"
                  style={{
                    backgroundColor: '#1abd6c',
                    color: '#fff',
                    zIndex: 9999,
                    width: '20px',
                    height: '20px',
                    textAlign: 'center',
                    lineHeight: '20px',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: parseInt(tempPoint.y - 10) + 'px',
                    left: parseInt(tempPoint.x - 10) + 'px',
                    overflow: 'hidden',
                  }}
                >
                  {index + 1}
                </div>
              )
            })}
          </div>
        </div>
        <div
          className="verify-bar-area"
          style={{
            width: setSize.imgWidth,
            color: barAreaColor,
            borderColor: barAreaBorderColor,
            lineHeight: barSize.height,
          }}
        >
          <span className="verify-msg">{this.state.text}</span>
        </div>
      </div>
    )
  }
}

VerifyPoints.defaultProps = {
  //距离margintop
  vSpace: 5,
  //滑块宽高
  barSize: {
    width: '310px',
    height: '40px',
  },
  // 图片宽高
  setSize: {
    imgHeight: 200,
    imgWidth: 330,
  },
  validateInfo: {
    wordList: [],
    baseDrawImg: '',
    blockDrawImg: '',
    token: '',
    secretKey: '',
  },
}

export default VerifyPoints
