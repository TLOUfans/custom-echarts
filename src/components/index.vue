<template>
  <el-row>
    <el-col :span="11">
      <template>
        <el-tabs v-model="activeName">
          <el-tab-pane label="映射" name="zero">
            <my-mapping></my-mapping>
          </el-tab-pane>
          <el-tab-pane label="作图方式" name="first">
            <my-data></my-data>
          </el-tab-pane>
          <el-tab-pane label="基本设置" name="second">
            <my-base :option.sync="option" :mainCharts="mainCharts"></my-base>
          </el-tab-pane>
          <el-tab-pane label="标题" name="third">
            <my-title :option.sync="option"></my-title>
          </el-tab-pane>
          <el-tab-pane label="坐标轴" name="fourth">
            <el-tabs>
              <el-tab-pane label="分类（x）轴">
                <my-axisx :option.sync="option"></my-axisx>
              </el-tab-pane>
              <el-tab-pane label="分类（y）轴">
                <my-axisy :option.sync="option"></my-axisy>
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="图例" name="fifth">
            <my-legend :option.sync="option"></my-legend>
          </el-tab-pane>
          <el-tab-pane label="提示" name="sixth">
            <my-tip :option.sync="option"></my-tip>
          </el-tab-pane>
          <el-tab-pane label="工具" name="seventh">
            <my-tool :option.sync="option"></my-tool>
          </el-tab-pane>
          <el-tab-pane label="序列" name="eighth">
            <my-sequ :option.sync="option"></my-sequ>
          </el-tab-pane>
          <el-tab-pane label="高级" name="ninth">
            <my-advance :option.sync="option"></my-advance>
          </el-tab-pane>
          <el-tab-pane label="扩展属性" name="tenth">扩展属性</el-tab-pane>
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
  </el-row>
</template>

<script>
  import { data } from '@/util/data.js'
  import { encodeData, createPack } from '@/util/base64'
  import { Login, saveSetting, querySetting, queryDataSrouce } from '../api'
  export default {
    name: 'index',
    data() {
      return {
        mainCharts: {},
        activeName: 'zero',
        //数据
        option: data,
        userID: ''
      }
    },
    methods: {
      //保存按钮点击
      saveBtnClick() {
        let pack = createPack({
          id: 'c8f300e2-66bf-4a72-b162-ca9c339a819c',
          userID: this.userID,
          setting: JSON.stringify(this.option)
        })
        let jdata = encodeData(pack)
        
        saveSetting(jdata).then(res => {
          if(JSON.parse(res).success) {
            this.$message.success('保存成功')
          }
        })
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
      //查询图表配置
      querySetting({
        swhere: `UserID='${this.userID}'`
      }).then(res => {
        let option = JSON.parse(JSON.parse(JSON.parse(res).data.value)[0].Setting)
        this.option = option
        this.mainCharts.setOption(this.option)
      })
    },
    created() {
      //登陆PMS
      Login().then(res => {
        sessionStorage.userID = JSON.parse(res).data.humanid
      }).catch(err => {
        console.log(err)
      })
    },
    watch: {
      option: {
        handler: function(){
          this.mainCharts.setOption(this.option)
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
</style>
