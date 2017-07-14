<template>
  <el-form :model="option" align="left" label-width="160px">
    <el-form-item label="数据列">
      <el-select v-model="seriesItem" placeholder="请选择数据列" @change="seriesItemChange">
        <el-option v-for="(series, index) in option.series" :key="index" :value="index" :label="series.name"></el-option>
      </el-select>
    </el-form-item>
    <div v-for="(series, index) in option.series" :index="index" v-show="index == show">
      <el-form-item label="柱子宽度" v-if="!isPie">
        <el-input-number v-model="option.series[index].barWidth" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="鼠标点击模式" v-if="isPie">
        <el-radio-group v-model="option.series[index].selectedMode">
          <el-radio :label="false">不可选</el-radio>
          <el-radio label="single">单选</el-radio>
          <el-radio label="multiple">多选</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="指标名称" v-if="isPie">
        <el-switch on-color="#13ce66" off-color="#ff4949"></el-switch>
      </el-form-item>
      <el-form-item label="指标样式" v-if="isPie">
        
      </el-form-item>
      <el-form-item label="显示最大值" v-if="isPie">
        
      </el-form-item>
      <el-form-item label="南丁格耳图" v-if="isPie">
        <el-radio-group v-model="option.series[index].roseType">
          <el-radio :label="false">不显示</el-radio>
          <el-radio label="radius">半径和面积模式</el-radio>
          <el-radio label="area">半径模式</el-radio>
        </el-radio-group>
      </el-form-item>
      <div style="text-align:left; padding:0 0 20px 90px;">
        <el-tag>普通状态</el-tag>
      </div>
      <el-form-item label="系列主色" v-if="!isPie">
        <el-color-picker v-model="option.series[index].itemStyle.normal.color"></el-color-picker>
      </el-form-item>
      <el-form-item label="数据项标签">
        <el-switch v-model="option.series[index].label.normal.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
      </el-form-item>
      <el-form-item label="位置" v-if="!isPie">
        <el-radio-group v-model="option.series[index].label.normal.position">
          <el-radio label="top">居上</el-radio>
          <el-radio label="insideBottom">居下</el-radio>
          <el-radio label="left">居左</el-radio>
          <el-radio label="right">居右</el-radio>
          <el-radio label="inside">内部</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="位置" v-if="isPie">
        <el-radio-group v-model="option.series[index].label.normal.position">
          <el-radio label="outside">外侧</el-radio>
          <el-radio label="inside">内部</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文本样式">
        <my-font :textStyle.sync="option.series[index].label.normal.textStyle"></my-font>
      </el-form-item>
      <el-form-item label="数据标签内容" v-if="isPie">
        <el-radio-group v-model="option.series[index].label.normal.formatter">
          <el-radio label="{b}">数据名</el-radio>
          <el-radio label="{c}">数据值</el-radio>
          <el-radio label="{d}">百分比</el-radio>
        </el-radio-group>
      </el-form-item>
      <div style="text-align:left; padding:0 0 20px 90px;">
        <el-tag>高亮状态</el-tag>
      </div>
      <el-form-item label="系列主色" v-if="!isPie">
        <el-color-picker v-model="option.series[index].itemStyle.emphasis.color"></el-color-picker>
      </el-form-item>
      <el-form-item label="数据项标签">
        <el-switch v-model="option.series[index].label.emphasis.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
      </el-form-item>
      <el-form-item label="位置" v-if="!isPie">
        <el-radio-group v-model="option.series[index].label.emphasis.position">
          <el-radio label="top">居上</el-radio>
          <el-radio label="insideBottom">居下</el-radio>
          <el-radio label="left">居左</el-radio>
          <el-radio label="right">居右</el-radio>
          <el-radio label="inside">内部</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="位置" v-if="isPie">
        <el-radio-group v-model="option.series[index].label.emphasis.position">
          <el-radio label="outside">外侧</el-radio>
          <el-radio label="inside">内部</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文本样式">
        <my-font :textStyle="option.series[index].label.emphasis.textStyle"></my-font>
      </el-form-item>
      <el-form-item label="数据标签内容" v-if="isPie">
        <el-radio-group v-model="option.series[index].label.emphasis.formatter">
          <el-radio label="{b}">数据名</el-radio>
          <el-radio label="{c}">数据值</el-radio>
          <el-radio label="{d}">百分比</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="数据标注" v-if="!isPie">
        <el-checkbox-group v-model="option.series[index].markPoint.select" @change="markPointChange">
          <el-checkbox label="min">最小值</el-checkbox>
          <el-checkbox label="max">最大值</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="数据标线" v-if="!isPie">
        <el-checkbox-group v-model="option.series[index].markLine.select" @change="markLineChange">
          <el-checkbox label="average">平均值</el-checkbox>
          <el-checkbox label="min">最小值</el-checkbox>
          <el-checkbox label="max">最大值</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
  export default {
    name: 'my-sequ',
    props: ['option', 'isPie', 'mainCharts'],
    data() {
      return {
        seriesItem: '',
        show: 0
      }
    },
    methods: {
      //数据标注
      markPointChange(value) {
        let _self = this
        this.option.series[this.show].markPoint.data = []
        this.$set(this.option.series[this.show].markPoint.data)
        this.option.series[this.show].markPoint.select.forEach((o, i) => {
          let obj = {}
          if (o == 'min') {
            obj.name = '最小值',
              obj.type = o
          } else if (o == 'max') {
            obj.name = '最大值',
              obj.type = o
          }
          _self.option.series[this.show].markPoint.data.push(obj)
        })
      },
      //数据标线
      markLineChange() {
        let _self = this
        this.option.series[this.show].markLine.data = []
        this.$set(this.option.series[this.show].markLine.data)
        this.option.series[this.show].markLine.select.forEach((o, i) => {
          let obj = {}
          if (o == 'min') {
            obj.name = '最小值',
              obj.type = o
          } else if (o == 'max') {
            obj.name = '最大值',
              obj.type = o
          } else if (o == 'average') {
            obj.name = '平均值',
              obj.type = o
          }
          _self.option.series[this.show].markLine.data.push(obj)
        })
      },
      //切换数据列配置
      seriesItemChange(value) {
        this.show = value
      }
    }
  }

</script>
