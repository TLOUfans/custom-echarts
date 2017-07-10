const data = {
  title: {
    text: 'ECharts 入门示例',
    textStyle: {}
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  grid: {
    x: '80',
    y: '60',
    x1: '80',
    y1: '60'
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    nameTextStyle: {},
    axisLabel: {
      rotate: '',
      textStyle: {}
    },
    splitLine: {
      show: false,
      lineStyle: {}
    },
    splitArea: {
      show: false
    }
  },
  yAxis: {
    nameTextStyle: {},
    axisLabel: {
      rotate: '',
      textStyle: {}
    },
    splitLine: {
      show: true,
      lineStyle: {}
    },
    splitArea: {
      show: false
    }
  },
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
}
export {
  data
}
