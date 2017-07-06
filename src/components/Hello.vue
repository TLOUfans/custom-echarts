<template>
  <el-row>
    <el-col :span="24">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" menu-trigger="click" :unique-opened="uniqueOpened" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title">柱图</template>
          <el-menu-item index="1-1">普通柱图</el-menu-item>
          <el-menu-item index="1-2">堆积柱图</el-menu-item>
          <el-menu-item index="1-3">普通横条</el-menu-item>
          <el-menu-item index="1-4">堆积横条</el-menu-item>
          <el-menu-item index="1-5">瀑布图</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">线图</template>
          <el-menu-item index="2-1">线图1</el-menu-item>
          <el-menu-item index="2-2">线图2</el-menu-item>
          <el-menu-item index="2-3">线图3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">饼图</template>
          <el-menu-item index="3-1">饼图1</el-menu-item>
          <el-menu-item index="3-2">饼图2</el-menu-item>
          <el-menu-item index="3-3">饼图3</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="24">
      <el-col :span="10">
        <template>
          <el-tabs v-model="activeName">
            <el-tab-pane label="作图方式" name="first">
              <el-form :model="mappingMethodForm" label-width="160px">
                <el-form-item label="汇总、计算项作图">
                  <el-checkbox-group v-model="mappingMethodForm.sumMapping">
                    <el-checkbox label="" name="sumMapping"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="列汇总、计算项作图">
                  <el-checkbox-group v-model="mappingMethodForm.cloumnSumMapping">
                    <el-checkbox label="" name="cloumnSumMapping"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="作图方式">
                  <div style="text-align:left; padding-left:20px">
                    <el-radio-group v-model="mappingMethodForm.mappingMethod">
                      <el-radio label="按行全选"></el-radio>
                      <el-radio label="按列全选"></el-radio>
                      <el-radio label="按行"></el-radio>
                      <el-radio label="按列"></el-radio>
                    </el-radio-group>
                  </div>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="基本设置" name="second">
              <el-form :model="baseSetting" label-width="160px">
                <el-form-item label="画布大小">
                  <div style="text-align:left; padding:0 20px 0 20px;">
                    <div class="block">
                      <span class="demonstration">宽度</span>
                      <el-slider v-model="baseSetting.width" :max="1000" :min="400"></el-slider>
                    </div>
                    <div class="block">
                      <span class="demonstration">高度</span>
                      <el-slider v-model="baseSetting.height" :max="800" :min="200"></el-slider>
                    </div>
                  </div>
                </el-form-item>
                <el-form-item label="背景颜色">
                  <div style="text-align:left; padding-left: 20px">
                    <el-color-picker></el-color-picker>
                  </div>
                </el-form-item>
                <el-form-item label="边距">
                  <div style="text-align:left; padding-left: 20px; ">
                    <span class="demonstration">上</span>
                    <el-input v-model="baseSetting.left" size="small" style="width:50px;margin-right: 5px;"></el-input>
                    <span class="demonstration">右</span>
                    <el-input v-model="baseSetting.top" size="small" style="width:50px;margin-right: 5px;"></el-input>
                    <span class="demonstration">下</span>
                    <el-input v-model="baseSetting.right" size="small" style="width:50px;margin-right: 5px;"></el-input>
                    <span class="demonstration">左</span>
                    <el-input v-model="baseSetting.bottom" size="small" style="width:50px;"></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="初始化动画">
                  <div style="text-align:left; padding-left: 20px;">
                    <el-switch
                      v-model="baseSetting.animate"
                      on-color="#13ce66"
                      off-color="#ff4949">
                    </el-switch>
                  </div>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="标题" name="third">
              <el-form :model="titleForm" label-width="160px">
                <el-form-item label="标题">
                  <div style="text-align: left; padding-left: 20px">
                    <el-input v-model="titleForm.title" size="small" style="width: 240px;"></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="标题样式">
                  <div style="text-align: left; padding-left: 20px">
                    <el-dropdown split-button type="primary" trigger="click" size="small">
                      请选择字体
                      <el-dropdown-menu slot="dropdown" style="font-size: 14px;">
                        <el-dropdown-item v-for="style in fonts.style" :command="style">{{style}}</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown split-button type="primary" trigger="click" size="small">
                      请选择字号
                      <el-dropdown-menu slot="dropdown" style="font-size: 14px;">
                        <el-dropdown-item v-for="size in fonts.size" :command="size">{{size}}</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown split-button type="primary" trigger="click" size="small">
                      请选择字体粗细
                      <el-dropdown-menu slot="dropdown" style="font-size: 14px;">
                        <el-dropdown-item v-for="bold in fonts.bold" :command="bold">{{bold}}</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                    <el-color-picker></el-color-picker>
                  </div>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="坐标轴" name="fourth" v-if="isEdward">坐标轴</el-tab-pane>
            <el-tab-pane label="图例" name="fifth">图例</el-tab-pane>
            <el-tab-pane label="提示" name="sixth">提示</el-tab-pane>
            <el-tab-pane label="工具" name="seventh">工具</el-tab-pane>
            <el-tab-pane label="序列" name="eighth">序列</el-tab-pane>
            <el-tab-pane label="高级" name="ninth">高级</el-tab-pane>
            <el-tab-pane label="扩展属性" name="tenth">扩展属性</el-tab-pane>
          </el-tabs>
        </template>
      </el-col>
      <el-col :span="14">
        <div class="echarts">
          <div id="myCharts"></div>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        activeIndex: '1',
        activeName: 'first',
        uniqueOpened: true,
        isEdward: true,
        fonts: {
          style: ['宋体', '黑体', '楷体', '仿宋', '新宋体', '微软雅黑', 'Arial', 'sans-serif', 'Times New Roman', 'Verdana'],
          size: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
          bold: ['常规', '加粗']
        },
        mappingMethodForm: {
          sumMapping: '',
          cloumnSumMapping: '',
          mappingMethod: ''
        },
        baseSetting: {
          width: 600,
          height: 400,
          color: '',
          margin: {
            left: '',
            top: '',
            right: '',
            bottom: ''
          },
          animate: true
        },
        titleForm: {
          title: '',
          fonts: {
            style: '',
            size: '',
            bold: false,
            color: ''
          }
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if(keyPath[0] == '3') {
          this.isEdward = false
          if(this.activeName == 'fourth') this.activeName = 'first'
        } else {
          this.isEdward = true
        }
      }
    },
    mounted() {
      console.log(document.all.fonts)
      let chartBox = document.getElementsByClassName('echarts')[0]
      let myCharts = document.getElementById('myCharts')

      function resizeCharts() {
        myCharts.style.height = chartBox.offsetHeight + 'px'
        myCharts.style.width = chartBox.offsetWidth + 'px'
      }
      resizeCharts()
      let mainCharts = this.$echarts.init(myCharts)
      let option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      mainCharts.setOption(option);
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="scss" scoped>
  .echarts { 
    height: 400px; 
    width: 100%;
  }
  .el-checkbox-group {
    text-align: left;
    padding-left: 20px;
  }
  .demonstration {
    margin-right: 5px;
  }
</style>
