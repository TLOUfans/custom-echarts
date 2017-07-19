<template>
  <el-form :model="option" align="left" label-width="130px">
    <el-form-item label="数据列">
      <el-select v-model="seriesItem" placeholder="请选择数据列" @change="seriesItemChange">
        <el-option v-for="(series, index) in option.series" :key="index" :value="index" :label="series.name"></el-option>
      </el-select>
    </el-form-item>
    <div v-for="(series, index) in option.series" :index="index" v-show="index == show">
      <el-form-item label="鼠标点击模式" v-if="isPie">
        <el-radio-group v-model="option.series[index].selectedMode">
          <el-radio :label="false">不可选</el-radio>
          <el-radio label="single">单选</el-radio>
          <el-radio label="multiple">多选</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="半径比例" v-if="isPie">
        <el-slider v-model="radius" range :format-tooltip="formatRadius" :step="10" show-stops></el-slider>
      </el-form-item>
      <el-form-item label="南丁格尔图" v-if="isPie">
        <el-radio-group v-model="option.series[index].roseType">
          <el-radio :label="false">不显示</el-radio>
          <el-radio label="radius">半径和面积模式</el-radio>
          <el-radio label="area">半径模式</el-radio>
        </el-radio-group>
      </el-form-item>
      <div style="text-align:left; padding:0 0 20px 60px;">
        <el-tag>普通状态</el-tag>
      </div>
      <el-form-item label="系列主色" v-if="!isPie">
        <el-color-picker v-model="option.series[index].itemStyle.normal.color"></el-color-picker>
      </el-form-item>
      <el-form-item label="数据项标签" v-if="!isPie">
        <el-switch v-model="option.series[index].label.normal.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
      </el-form-item>
      <el-form-item label="数据项标签" v-if="isPie">
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
      <div style="text-align:left; padding:0 0 20px 60px;">
        <el-tag>高亮状态</el-tag>
      </div>
      <el-form-item label="系列主色" v-if="!isPie">
        <el-color-picker v-model="option.series[index].itemStyle.emphasis.color"></el-color-picker>
      </el-form-item>
      <el-form-item label="数据项标签" v-if="!isPie">
        <el-switch v-model="option.series[index].label.emphasis.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
      </el-form-item>
      <el-form-item label="数据项标签" v-if="isPie">
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
        <el-checkbox-group v-model="option.series[index].markPoint.data">
          <el-checkbox :label="point.min">最小值</el-checkbox>
          <el-checkbox :label="point.max">最大值</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="数据标线" v-if="!isPie">
        <el-checkbox-group v-model="option.series[index].markLine.data">
          <el-checkbox :label="line.average">平均值</el-checkbox>
          <el-checkbox :label="line.min">最小值</el-checkbox>
          <el-checkbox :label="line.max">最大值</el-checkbox>
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
        show: 0,
        point: {
          max: {name: '最大值', type: 'max'}, 
          min: {name: '最小值', type: 'min'}
        },
        line: {
          max: {name: '最大值', type: 'max'},
          min: {name: '最小值', type: 'min'},
          average: {name: '平均值', type: 'average'}
        },
        radius: []
      }
    },
    methods: {
      //切换数据列配置
      seriesItemChange(value) {
        this.show = value
        this.radius = []
        this.option.series[value].radius.forEach((o, i) => {
          this.radius.push(Number(o.replace('%', '')))
        })
      },
      formatRadius(value) {
        if(value) return value + '%'
      }
    },
    computed: {
      contactRadius() {
        let tempArr = []
        this.radius.forEach((o, i) => {
          tempArr.push(o + '%')
        })
        return tempArr.toString()
      }
    },
    watch: {
      radius() {
        let tempArr = []
        this.radius.forEach((o, i) => {
          tempArr.push(o + '%')
        })
        this.option.series[this.show].radius = tempArr
      }
    },
    beforeMount() {
      if(this.isPie) {
        this.option.series[this.show].radius.forEach((o, i) => {
          this.radius.push(Number(o.replace('%', '')))
        })
      }
    }
  }

</script>
