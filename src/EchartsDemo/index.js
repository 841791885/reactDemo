import React, { useRef } from 'react'
import * as echarts from 'echarts'
import { useMount } from 'ahooks'

import { EchartsDemoWrapper } from './style'

export default function EchartsDemo() {
  const echartsImgRef = useRef()
  useMount(() => {
    const myChart = echarts.init(echartsImgRef && echartsImgRef.current, 'dark')
    const option = {
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d'],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: 'auto',
            },
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4,
            },
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 20,
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} km/h',
            color: 'auto',
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    }
    myChart.setOption(option)
    setInterval(function () {
      myChart.setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed(2),
              },
            ],
          },
        ],
      })
    }, 2000)
  })
  return (
    <EchartsDemoWrapper>
      <div className="echartcalss" ref={echartsImgRef}></div>
    </EchartsDemoWrapper>
  )
}
