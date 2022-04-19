import React from 'react'
import { TempDemoWrapper } from './style'
export default function TempDemo() {
  const drawToCanvas = (imgData) => {
    // 选取页面上的canvas
    const canvas = document.querySelector('#canvas')
    canvas.width = 300
    canvas.height = 300
    //获取canvs画笔
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = imgData
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 300, 400)
      //获取canvas压缩出来的图片
      const strDataUri = canvas.toDataURL()
    }
  }
  const readFile = (e) => {
    //获取上传的文件
    const file = e.target.files[0]
    //转换为文件流
    const reader = new FileReader()
    reader.readAsDataURL(file) //转化为base64
    reader.onload = (e) => {
      //获取base64
      console.log(e.target.result)
      drawToCanvas(e.target.result)
    }
  }
  const doInput = () => {
    const inputObj = document.createElement('input')
    inputObj.addEventListener('change', readFile, false)
    inputObj.type = 'file'
    inputObj.accept = 'image/*'
    inputObj.click()
  }
  return (
    <TempDemoWrapper>
      <div className="left" onClick={doInput}></div>
      {/* <canvas id="canvas" /> */}
    </TempDemoWrapper>
  )
}
