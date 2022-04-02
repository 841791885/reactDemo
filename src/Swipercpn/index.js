// 引入Swiper组件
import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import { SwiperWrapper } from './style'
// 引入Swiper样式
import 'swiper/swiper-bundle.css'

export default function Swipercpn() {
  useEffect(() => {
    setSwiperIns(
      new Swiper('.swiper', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
    )
  }, [])
  const [swiperIns, setSwiperIns] = useState(null)
  return (
    <SwiperWrapper>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* <div className="swiper-scrollbar"></div> */}
      </div>
    </SwiperWrapper>
  )
}
