<template>
  <el-row>
    <el-col :span="24">
      <el-col :span="11">
        <template>
          <el-tabs type="border-card" v-model="activeGraphics" @tab-click="graphicsTabClick">
            <el-tab-pane label="柱/线图" name="bar">
              <el-tabs v-model="activeBarName" class="tab">
                <el-tab-pane label="基本设置" name="second">
                  <my-base :option.sync="barOption" :mainCharts="mainCharts"></my-base>
                </el-tab-pane>
                <el-tab-pane label="标题" name="third">
                  <my-title :option.sync="barOption"></my-title>
                </el-tab-pane>
                <el-tab-pane label="坐标轴" name="fourth">
                  <el-tabs>
                    <el-tab-pane label="分类（x）轴">
                      <my-axisx :option.sync="barOption"></my-axisx>
                    </el-tab-pane>
                    <el-tab-pane label="分类（y）轴">
                      <my-axisy :option.sync="barOption"></my-axisy>
                    </el-tab-pane>
                  </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="图例" name="fifth">
                  <my-legend :option.sync="barOption"></my-legend>
                </el-tab-pane>
                <el-tab-pane label="提示" name="sixth">
                  <my-tip :option.sync="barOption"></my-tip>
                </el-tab-pane>
                <el-tab-pane label="工具" name="seventh">
                  <my-tool :option.sync="barOption"></my-tool>
                </el-tab-pane>
                <el-tab-pane label="序列" name="eighth" >
                  <my-sequ :option.sync="barOption" :mainCharts="mainCharts"></my-sequ>
                </el-tab-pane>
                <el-tab-pane label="扩展属性" name="ninth">
                  <my-extend :option.sync="barOptionStr" @customCodeBtnClick="customBarCodeBtnClick"></my-extend>
                </el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="饼图" name="pie">
              <el-tabs v-model="activePieName" class="tab">
                <el-tab-pane label="基本设置" name="second">
                  <my-base :option.sync="pieOption" :mainCharts="mainCharts" :isPie="true"></my-base>
                </el-tab-pane>
                <el-tab-pane label="标题" name="third">
                  <my-title :option.sync="pieOption"></my-title>
                </el-tab-pane>
                <el-tab-pane label="图例" name="fifth">
                  <my-legend :option.sync="pieOption"></my-legend>
                </el-tab-pane>
                <el-tab-pane label="提示" name="sixth">
                  <my-tip :option.sync="pieOption"></my-tip>
                </el-tab-pane>
                <el-tab-pane label="工具" name="seventh">
                  <my-tool :option.sync="pieOption"></my-tool>
                </el-tab-pane>
                <el-tab-pane label="序列" name="eighth" >
                  <my-sequ :option.sync="pieOption" :isPie="true" :mainCharts="mainCharts"></my-sequ>
                </el-tab-pane>
                <el-tab-pane label="扩展属性" name="ninth">
                  <my-extend :option.sync="pieOptionStr" @customCodeBtnClick="customPieCodeBtnClick"></my-extend>
                </el-tab-pane>
              </el-tabs>
            </el-tab-pane>
          </el-tabs>
        </template>
      </el-col>
      <el-col :span="1">
        &nbsp;
      </el-col>
      <el-col :span="12">
        <div class="echarts">
          <div id="myCharts"></div>
          <el-button @click="saveBtnClick">保存配置</el-button>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
  import { barData } from '@/util/barData'
  import { pieData } from '@/util/pieData'
  import { encodeData, createPack } from '@/util/base64'
  import { Login, saveSetting, querySetting, queryDataSource } from '../api/index'
  import { rainfall, evaporation, xAxisdata, meta } from '@/util/data'
  export default {
    name: 'index',
    data() {
      return {
        mainCharts: {},
        activeGraphics: 'bar',
        activeBarName: 'second',
        activePieName: 'second',
        //数据
        barOption: barData,
        pieOption: pieData,
        userID: '',
        isBar: true,
        barOptionStr: '',
        pieOptionStr: '',
      }
    },
    methods: {
      //保存按钮点击
      saveBtnClick() {
        let pack = createPack({
          id: 'b52822b8-a29e-4d23-bedb-6614566ba3d4',
          userID: this.userID,
          barSetting: JSON.stringify(this.barOption),
          pieSetting: JSON.stringify(this.pieOption),
        })
        let jdata = encodeData(pack)
        
        saveSetting(jdata).then(res => {
          if(JSON.parse(res).success) {
            this.$message.success('保存成功')
          }
        })
      },
      graphicsTabClick(e) {
        if(e.name == 'bar') {
          this.isBar = true
          this.mainCharts.setOption(this.barOption, true)
        } else {
          this.isBar = false
          this.mainCharts.setOption(this.pieOption, true)
        }
      },
      customBarCodeBtnClick(option) {
        try {
          JSON.parse(option)
        } catch(e) {
          this.$message.error('JSON格式错误')
        }
        this.barOption = JSON.parse(option)
        this.$set(this.barOption)
        this.barOptionStr = option
      },
      customPieCodeBtnClick(option) {
        try {
          JSON.parse(option)
        } catch(e) {
          this.$message.error('JSON格式错误')
        }
        this.pieOption = JSON.parse(option)
        this.$set(this.pieOption)
        this.pieOptionStr = option
      }
    },
    mounted() {
      this.userID = sessionStorage.userID
      
      let chartBox = document.getElementsByClassName('echarts')[0]
      let myCharts = document.getElementById('myCharts')

      function resizeCharts() {
        myCharts.style.height = chartBox.offsetHeight + 'px'
        myCharts.style.width = chartBox.offsetWidth + 'px'
      }
      resizeCharts()
      this.mainCharts = this.$echarts.init(myCharts)
      const _self = this
      //echarts切换柱图线图事件
      this.mainCharts.on('magictypechanged', (params) => {
        let graphicsType = params.currentType
        _self.barOption.series.map((o, i) => {
          return o.type = graphicsType
        }),
        this.barOptionStr = JSON.stringify(this.barOption, undefined, 2)
      })
      //浏览器尺寸变化事件
      window.onresize = function () {
        let $textarea = document.querySelector('.form textarea')
        $('.runBtn').css({
          top: document.documentElement.clientHeight - 89,
          left: 130 + $textarea.offsetWidth - document.querySelector('.runBtn').offsetWidth - 5
        })
      }
      
      //给barOption和pieOption赋值
      this.barOptionStr = JSON.stringify(this.barOption, undefined, 2)
      this.pieOptionStr = JSON.stringify(this.pieOption, undefined, 2)

      $('.runBtn').css({
        top: document.documentElement.clientHeight - 89,
        left: 130 + 410 - 58 - 5
      })

      $('.el-form').css({
        height: document.documentElement.clientHeight - 147
      })
      $('.el-form.axisForm').css({
        height: document.documentElement.clientHeight - 204
      })
      //查询图表配置
      // querySetting({
      //   swhere: `UserID='${this.userID}'`
      // }).then(res => {
      //   let barOption = JSON.parse(JSON.parse(JSON.parse(res).data.value)[0].BarSetting)
      //   let pieOption = JSON.parse(JSON.parse(JSON.parse(res).data.value)[0].PieSetting)
      //   this.barOption = barOption
      //   this.pieOption = pieOption
      // })
    },
    created() {
      //登陆PMS
      // Login().then(res => {
      //   sessionStorage.userID = JSON.parse(res).data.humanid
      //   this.$message.success('登陆成功')
      // }).catch(err => {
      //   console.log(err)
      // })
    },
    watch: {
      barOption: {
        handler: function() {
          if(this.isBar) {
            let currentOption = this.mainCharts.getOption()
            if(currentOption) {
              let graphicsType = currentOption.series[0].type
              this.barOption.series.map((o, i) => {
                return o.type = graphicsType
              })
            }
            this.mainCharts.setOption(this.barOption, true)
            this.barOptionStr = JSON.stringify(this.barOption, undefined, 2)
          }
        },
        deep: true
      },
      pieOption: {
        handler: function(val, oldVal) {
          if(!this.isBar) {
            this.mainCharts.setOption(this.pieOption, true)
            this.pieOptionStr = JSON.stringify(this.pieOption, undefined, 2)
          }
        },
        deep: true
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .echarts {
    height: 400px;
    width: 100%;
  }
  .el-form {
    overflow-y: auto;
  }
</style>
