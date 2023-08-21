import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import defaultImg from '../assets/img/default.jpg'

class VerifySlide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blockSize: {
        width: '50px',
        height: '50px',
      },
      startMoveTime: '', //移动开始的时间
      endMovetime: '', //移动结束的时间
      tipsBackColor: '', //提示词的背景颜色
      moveBlockBackgroundColor: 'rgb(255, 255, 255)',
      leftBarBorderColor: '',
      iconColor: '',
      iconClass: 'icon-right',
      barAreaLeft: 0,
      barAreaOffsetWidth: 0,
      startLeft: null,
      moveBlockLeft: null,
      leftBarWidth: null,
      status: false, //鼠标状态
      isEnd: false, //是够验证完成
      passFlag: '',
      tipWords: '',
      text: '向右滑动完成验证',
    }
  }

  componentDidMount() {
    this.init()
  }

  init() {
    const _this = this

    window.removeEventListener('touchmove', function (e) {
      _this.move(e)
    })
    window.removeEventListener('mousemove', function (e) {
      _this.move(e)
    })

    //鼠标松开
    window.removeEventListener('touchend', function () {
      _this.end()
    })
    window.removeEventListener('mouseup', function () {
      _this.end()
    })

    window.addEventListener('touchmove', function (e) {
      _this.move(e)
    })
    window.addEventListener('mousemove', function (e) {
      _this.move(e)
    })

    //鼠标松开
    window.addEventListener('touchend', function () {
      _this.end()
    })
    window.addEventListener('mouseup', function () {
      _this.end()
    })
  }

  refresh() {
    this.setState({
      moveBlockLeft: '',
      leftBarWidth: '',
      text: '向右滑动完成验证',
      moveBlockBackgroundColor: '#fff',
      leftBarBorderColor: '#337AB7',
      iconColor: '#fff',
      status: false,
      isEnd: false,
    })
    this.props.refreshFn()
  }
  setBarArea = (event) => {
    const barAreaLeft = event && event.getBoundingClientRect().left //距离左侧的宽度
    const barAreaOffsetWidth = event && event.offsetWidth //滚动条的宽度
    this.state.barAreaLeft = barAreaLeft
    this.state.barAreaOffsetWidth = barAreaOffsetWidth
  }

  start = (e) => {
    e = e || window.event
    let x = 0
    if (!e.touches) {
      //兼容PC端
      x = e.clientX
    } else {
      //兼容移动端
      x = e.touches[0].pageX
    }
    this.state.startLeft = Math.floor(x - this.state.barAreaLeft)
    this.state.startMoveTime = +new Date() //开始滑动的时间
    if (this.state.isEnd == false) {
      this.setState({
        text: '',
        moveBlockBackgroundColor: '#337ab7',
        leftBarBorderColor: '#337AB7',
        iconColor: '#fff',
        status: true,
      })
      this.text = ''
      e.stopPropagation()
    }
  }

  move = (e) => {
    e = e || window.event
    if (this.state.status && this.state.isEnd == false) {
      let x = 0
      if (!e.touches) {
        //兼容PC端
        x = e.clientX
      } else {
        //兼容移动端
        x = e.touches[0].pageX
      }
      let bar_area_left = this.state.barAreaLeft
      let move_block_left = x - bar_area_left //小方块相对于父元素的left值
      if (
        move_block_left >=
        this.state.barAreaOffsetWidth -
          parseInt(parseInt(this.state.blockSize.width) / 2) -
          2
      ) {
        move_block_left =
          this.state.barAreaOffsetWidth -
          parseInt(parseInt(this.state.blockSize.width) / 2) -
          2
      }
      if (move_block_left <= 0) {
        move_block_left = parseInt(this.state.blockSize.width / 2)
      }
      //拖动后小方块的left值
      this.state.moveBlockLeft = move_block_left - this.state.startLeft + 'px'
      this.state.leftBarWidth = move_block_left - this.state.startLeft + 'px'
      this.setState({
        moveBlockLeft: this.state.moveBlockLeft,
        leftBarWidth: this.state.leftBarWidth,
      })
    }
  }

  end = () => {
    this.state.endMovetime = +new Date()
    //判断是否重合
    if (this.state.status && this.state.isEnd == false) {
      let moveLeftDistance = parseInt(
        (this.state.moveBlockLeft || '').replace('px', '')
      )
      moveLeftDistance =
        (moveLeftDistance * 310) / parseInt(this.props.setSize.imgWidth)
      const data = {
        captchaType: 'blockPuzzle',
        pointJson: JSON.stringify({ x: moveLeftDistance, y: 5.0 }),
        token: this.props.validateInfo.token,
        secretKey: this.props.validateInfo.secretKey,
      }
      this.props.validateFn(data).then((res) => {
        if (res.code === 'S_OK') {
          this.state.isEnd = true
          this.state.passFlag = true
          this.state.tipWords = this.setState({
            tipWords: `${(
              (this.state.endMovetime - this.state.startMoveTime) /
              1000
            ).toFixed(2)}s验证成功`,
          })
          setTimeout(() => {
            this.state.tipWords = ''
            this.refresh()
            this.props.successFn()
            this.setState({
              moveBlockLeft: '',
              leftBarWidth: '',
              text: '向右滑动完成验证',
              moveBlockBackgroundColor: '#fff',
              leftBarBorderColor: '#337AB7',
              iconColor: '#fff',
              status: false,
              isEnd: false,
            })
          }, 1500)
        } else {
          this.setState({
            isEnd: true,
            moveBlockBackgroundColor: '#d9534f',
            leftBarBorderColor: '#d9534f',
            iconColor: '#fff',
            iconClass: 'icon-close',
            passFlag: false,
            tipWords: '验证失败',
          })
          setTimeout(() => {
            this.refresh()
            this.setState({
              tipWords: '',
              moveBlockLeft: '',
              leftBarWidth: '',
              text: '向右滑动完成验证',
              moveBlockBackgroundColor: '#fff',
              leftBarBorderColor: '#337AB7',
              iconColor: '#fff',
              iconClass: 'icon-right',
              status: false,
              isEnd: false,
            })
          }, 1500)
        }
      })
      this.state.status = false
    }
  }

  render() {
    const {
      vSpace,
      barSize,
      transitionWidth,
      finishText,
      transitionLeft,
      setSize,
      validateInfo,
    } = this.props
    return (
      <div style={{ position: 'relative' }} className="stop-user-select">
        <div
          className="verify-img-out"
          style={{ height: parseInt(setSize.imgHeight) + vSpace }}
        >
          <div
            className="verify-img-panel"
            style={{
              width: setSize.imgWidth,
              height: setSize.imgHeight,
            }}
          >
            {validateInfo.baseDrawImg ? (
              <img
                src={'data:image/png;base64,' + validateInfo?.baseDrawImg}
                alt=""
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
            ) : (
              <img
                src={defaultImg}
                alt=""
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
            )}
            <div className="verify-refresh" onClick={() => this.refresh()}>
              <i className="iconfont icon-refresh"></i>
            </div>
            <CSSTransition
              in={this.state.tipWords.length > 0}
              timeout={150}
              classNames="tips"
              unmountOnExit
            >
              <span
                className={
                  this.state.passFlag
                    ? `${'verify-tips'} ${'suc-bg'}`
                    : `${'verify-tips'} ${'err-bg'}`
                }
              >
                {this.state.tipWords}
              </span>
            </CSSTransition>
          </div>
        </div>

        <div
          className="verify-bar-area"
          style={{
            width: setSize.imgWidth,
            height: barSize.height,
            lineHeight: barSize.height,
          }}
          ref={(bararea) => this.setBarArea(bararea)}
        >
          <span className="verify-msg">{this.state.text}</span>
          <div
            className="verify-left-bar"
            style={{
              width:
                this.state.leftBarWidth !== undefined
                  ? this.state.leftBarWidth
                  : barSize.height,
              height: barSize.height,
              borderColor: this.state.leftBarBorderColor,
              transaction: transitionWidth,
            }}
          >
            <span className="verify-msg">{finishText}</span>

            <div
              className="verify-move-block"
              onTouchStart={(e) => this.start(e)}
              onMouseDown={(e) => this.start(e)}
              style={{
                width: barSize.width,
                height: barSize.height,
                backgroundColor: this.state.moveBlockBackgroundColor,
                left: this.state.moveBlockLeft,
                transition: transitionLeft,
              }}
            >
              <i
                className={'verify-icon iconfont ' + this.state.iconClass}
                style={{ color: this.state.iconColor }}
              ></i>
              <div
                className="verify-sub-block"
                style={{
                  width:
                    Math.floor((parseInt(setSize.imgWidth) * 47) / 310) + 'px',
                  height: setSize.imgHeight,
                  top: '-' + (parseInt(setSize.imgHeight) + vSpace) + 'px',
                  backgroundSize: setSize.imgWidth + ' ' + setSize.imgHeight,
                }}
              >
                <img
                  src={'data:image/png;base64,' + validateInfo?.blockDrawImg}
                  alt=""
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

VerifySlide.defaultProps = {
  //距离margintop
  vSpace: 5,
  //滑块宽高
  barSize: {
    width: '40px',
    height: '40px',
  },
  //图片宽高
  setSize: {
    imgHeight: 200,
    imgWidth: 310,
  },
  validateInfo: {
    baseDrawImg: '',
    blockDrawImg: '',
    token: '',
    secretKey: '',
    wordList: [],
  },
}

export default VerifySlide
