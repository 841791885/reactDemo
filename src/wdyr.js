import React from 'react'

// Make sure to only include the library in development
if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React, {
    trackAllPureComponents: false, //写true监听所有组件
  })
}
// 需要监听个别组件就如下
// Cpn.whyDidYouRender = true
