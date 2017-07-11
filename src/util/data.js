const data = {
  title: {
    text: 'ECharts 入门示例',
    textStyle: {}
  },
  tooltip: {
    textStyle: {}
  },
  toolbox: {
    feature: {
      dataView: {
        show: false
      },
      dataZoom: {
        show: false
      },
      restore: {
        show: false
      },
      saveAsImage: {
        show: false
      }
    }
  },
  legend: {
    data: ['销量'],
    textStyle: {}
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
    data: [5, 20, 36, 10, 10, 20],
    itemStyle: {
      normal: {},
      emphasis: {}
    },
    label: {
      normal: {
        textStyle: {}
      },
      emphasis: {
        textStyle: {}
      }
    },
    markPoint: {
      data: []
    },
    markLine: {
      data: []
    }
  }]
}
export {
  data
}
