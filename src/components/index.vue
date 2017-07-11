<template>
  <el-row>
    <el-col :span="24">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" menu-trigger="click" :unique-opened="true"
        @select="handleSelect">
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
    <el-col :span="12">
      <template>
        <el-tabs v-model="activeName">
          <el-tab-pane label="映射" name="zero">
            <my-mapping></my-mapping>
          </el-tab-pane>
          <el-tab-pane label="作图方式" name="first">
            <my-data></my-data>
          </el-tab-pane>
          <el-tab-pane label="基本设置" name="second">
            <my-base :option="option" :mainCharts="mainCharts"></my-base>
          </el-tab-pane>
          <el-tab-pane label="标题" name="third">
            <my-title :option="option" :mainCharts="mainCharts"></my-title>
          </el-tab-pane>
          <el-tab-pane label="坐标轴" name="fourth" v-if="isEdward">
            <el-tabs>
              <el-tab-pane label="分类（x）轴">
                <my-axisx :option="option" :mainCharts="mainCharts"></my-axisx>
              </el-tab-pane>
              <el-tab-pane label="分类（y）轴">
                <my-axisy :option="option" :mainCharts="mainCharts"></my-axisy>
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="图例" name="fifth">
            <my-legend :option="option" :mainCharts="mainCharts"></my-legend>
          </el-tab-pane>
          <el-tab-pane label="提示" name="sixth">
            <my-tip :option="option" :mainCharts="mainCharts"></my-tip>
          </el-tab-pane>
          <el-tab-pane label="工具" name="seventh">
            <my-tool :option="option" :mainCharts="mainCharts"></my-tool>
          </el-tab-pane>
          <el-tab-pane label="序列" name="eighth">
            <my-sequ :option="option" :mainCharts="mainCharts"></my-sequ>
          </el-tab-pane>
          <el-tab-pane label="高级" name="ninth">
            <my-advance :option.sync="option" :mainCharts.sync="mainCharts"></my-advance>
          </el-tab-pane>
          <el-tab-pane label="扩展属性" name="tenth">扩展属性</el-tab-pane>
        </el-tabs>
      </template>
    </el-col>
    <el-col :span="12">
      
    </el-col>
    <el-col :span="24">
      <div class="echarts">
        <div id="myCharts"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import {
    data
  } from '../util/data.js'

  import {Login, bidApplication} from '../api'
  export default {
    name: 'index',
    data() {
      return {
        mainCharts: {},
        activeIndex: '1',
        activeName: 'first',
        //是否为饼图
        isEdward: true,
        //数据
        option: data,
        meta: [],
        tableData: []
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if (keyPath[0] == '3') {
          this.isEdward = false
          if (this.activeName == 'fourth') this.activeName = 'first'
        } else {
          this.isEdward = true
        }
      }
    },
    mounted() {
      
      let chartBox = document.getElementsByClassName('echarts')[0]
      let myCharts = document.getElementById('myCharts')

      function resizeCharts() {
        myCharts.style.height = chartBox.offsetHeight + 'px'
        myCharts.style.width = chartBox.offsetWidth + 'px'
      }
      resizeCharts()
      this.mainCharts = this.$echarts.init(myCharts)
      this.mainCharts.setOption(this.option);
    },
    created(){
      Login().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
