const data = {
  backgroundColor: 'rgba(255, 255, 255, 1)',
  animation: true,
  title: {
    text: 'ECharts 入门示例',
    textStyle: {
      fontFamily: 'sans-serif',
      fontSize: '18',
      fontWeight: 'normal',
      color: '#333'
    },
    x: 'left'
  },
  tooltip: {
    show: true,
    borderWidth: '0',
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    textStyle: {
      fontFamily: 'sans-serif',
      fontSize: '14',
      fontWeight: 'nomal',
      color: '#fff'
    }
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
    data: ['蒸发量','降水量'],
    left: 'middle',
    top: 'auto',
    textStyle: {
      fontFamily: 'sans-serif',
      fontSize: '12',
      fontWeight: 'normal',
      color: '#333'
    }
  },
  grid: {
    x: '80',
    y: '60',
    x1: '80',
    y1: '60'
  },
  xAxis: {
    name: '',
    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    nameTextStyle: {
      fontFamily: 'sans-serif',
      fontSize: '12',
      fontWeight: 'normal',
      color: '#333'
    },
    nameLocation: 'end',
    nameGap: '15',
    axisLabel: {
      show: true,
      interval: '0',
      rotate: '0',
      textStyle: {
        fontFamily: 'sans-serif',
        fontSize: '12',
        fontWeight: 'normal',
        color: '#333'
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        type: 'solid',
        width: '1',
        color: '#ccc'
      }
    },
    splitArea: {
      show: false
    }
  },
  yAxis: {
    name: '',
    nameTextStyle: {
      fontFamily: 'sans-serif',
      fontSize: '12',
      fontWeight: 'normal',
      color: '#333'
    },
    nameLocation: 'end',
    nameGap: '15',
    axisLabel: {
      show: true,
      rotate: '0',
      textStyle: {
        fontFamily: 'sans-serif',
        fontSize: '12',
        fontWeight: 'normal',
        color: '#333'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'solid',
        width: '1',
        color: '#ccc'
      }
    },
    splitArea: {
      show: false
    }
  },
  series: [{
    name: '蒸发量',
    type: 'bar',
    width: '0',
    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
    markPoint: {
      show: false
    },
    markLine: {
      data: []
    },
    itemStyle: {
      normal: {
        color: '',
      },
      emphasis: {
        color: ''
      }
    },
    label: {
      normal: {
        show: false,
        position: 'inside',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: '12',
          fontWeight: 'normal',
          color: '#fff'
        }
      },
      emphasis: {
        show: false,
        position: 'inside',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: '12',
          fontWeight: 'normal',
          color: '#fff'
        }
      }
    },
    markPoint: {
      data: [],
      select: []
    },
    markLine: {
      data: [],
      select: []
    }
  },{
    name: '降水量',
    type: 'bar',
    width: '0',
    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
    markPoint: {
      show: false
    },
    markLine: {
      data: []
    },
    itemStyle: {
      normal: {
        color: '',
      },
      emphasis: {
        color: ''
      }
    },
    label: {
      normal: {
        show: false,
        position: 'inside',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: '12',
          fontWeight: 'normal',
          color: '#fff'
        }
      },
      emphasis: {
        show: false,
        position: 'inside',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: '12',
          fontWeight: 'normal',
          color: '#fff'
        }
      }
    },
    markPoint: {
      data: [],
      select: []
    },
    markLine: {
      data: [],
      select: []
    }
  }]
}
export {
  data
}
