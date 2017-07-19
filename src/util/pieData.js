export const pieData = {
  theme: 'shine',
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
    trigger: 'item',
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
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    left: 'middle',
    top: 'auto',
    textStyle: {
      fontFamily: 'sans-serif',
      fontSize: '12',
      fontWeight: 'normal',
      color: '#333'
    }
  },
  series: [{
    roseType: false,
    selectedMode: false,
    name: '降水量',
    type: 'pie',
    radius: ['0%', '50%'],
    center: ['25%', '50%'],
    data: [{
      value: 2.6,
      name: '1月'
    }, {
      value: 5.9,
      name: '2月'
    }, {
      value: 9.0,
      name: '3月'
    }, {
      value: 26.4,
      name: '4月'
    }, {
      value: 28.7,
      name: '5月'
    }, {
      value: 70.7,
      name: '6月'
    }, {
      value: 175.6,
      name: '7月'
    }, {
      value: 182.2,
      name: '8月'
    }, {
      value: 48.7,
      name: '9月'
    }, {
      value: 18.8,
      name: '10月'
    }, {
      value: 6.0,
      name: '11月'
    }, {
      value: 2.3,
      name: '12月'
    }],
    labelLine: {
      normal: {
        show: true
      },
      emphasis: {
        show: true
      }
    },
    label: {
      normal: {
        show: true,
        position: 'outside',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: '12',
          fontWeight: 'normal',
          color: ''
        },
        formatter: '{b}'
      },
      emphasis: {
        show: true,
        position: 'outside',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: '12',
          fontWeight: 'normal',
          color: ''
        },
        formatter: '{b}'
      }
    }
  }, {
    roseType: false,
    selectedMode: false,
    name: '蒸发量',
    type: 'pie',
    radius: ['0%', '50%'],
    center: ['75%', '50%'],
    data: [{
      value: 2.0,
      name: '1月'
    }, {
      value: 4.9,
      name: '2月'
    }, {
      value: 7.0,
      name: '3月'
    }, {
      value: 23.2,
      name: '4月'
    }, {
      value: 25.6,
      name: '5月'
    }, {
      value: 76.7,
      name: '6月'
    }, {
      value: 135.6,
      name: '7月'
    }, {
      value: 162.2,
      name: '8月'
    }, {
      value: 32.6,
      name: '9月'
    }, {
      value: 20.0,
      name: '10月'
    }, {
      value: 6.4,
      name: '11月'
    }, {
      value: 3.3,
      name: '12月'
    }],
    labelLine: {
      normal: {
        show: true
      },
      emphasis: {
        show: true
      }
    },
    label: {
      normal: {
        show: true,
        position: 'outside',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: '12',
          fontWeight: 'normal',
          color: ''
        },
        formatter: '{b}'
      },
      emphasis: {
        show: true,
        position: 'outside',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: '12',
          fontWeight: 'normal',
          color: ''
        },
        formatter: '{b}'
      }
    }
  }]
}