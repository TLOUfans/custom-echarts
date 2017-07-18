<template>
  <el-form :model="option" align="left" label-width="130px" class="axisForm">
    <el-form-item label="坐标轴名称">
      <el-input v-model="option.yAxis.name" size="small" style="width:240px"></el-input>
    </el-form-item>
    <el-form-item label="坐标轴名称样式">
      <my-font :textStyle.sync="option.yAxis.nameTextStyle"></my-font>
    </el-form-item>
    <el-form-item label="坐标轴名称位置">
      <el-radio-group v-model="option.yAxis.nameLocation">
        <el-radio label="start">位于开端</el-radio>
        <el-radio label="middle">居中</el-radio>
        <el-radio label="end">位于末端</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="名称到轴线的距离">
      <el-input-number v-model="option.yAxis.nameGap" :min="0" style="width: 240px"></el-input-number>
    </el-form-item>
    <el-form-item label="刻度显示">
      <div class="divContainer">
        <el-tag>是否显示</el-tag>
        <el-switch v-model="option.yAxis.axisLabel.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
      </div>
      <div class="divContainer">
        <el-tag>显示方式</el-tag>
        <el-radio-group v-model="option.xAxis.axisLabel.rotate">
          <el-radio label="0">自动</el-radio>
          <el-radio label="90">垂直显示</el-radio>
          <el-radio label="60">倾斜显示</el-radio>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="刻度标签样式">
      <my-font :textStyle.sync="option.yAxis.axisLabel.textStyle"></my-font>
    </el-form-item>
    <el-form-item label="数据轴格式">
      
    </el-form-item>
    <el-form-item label="刻度设置">
      <div class="divContainer">
        <el-tag>最小刻度</el-tag>
      </div>
      <div class="divContainer">
        <el-tag>最大刻度</el-tag>
      </div>
    </el-form-item>
    <el-form-item label="是否显示分割线">
      <el-switch v-model="option.yAxis.splitLine.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
    </el-form-item>
    <el-form-item label="分割线样式">
      <div class="divContainer">
      <el-tag>类型</el-tag>
      <el-select v-model="option.yAxis.splitLine.lineStyle.type" placeholder="请选择类型" size="small">
        <el-option v-for="type in line.type" :key="type.value" :label="type.label" :value="type.value"></el-option>
      </el-select>
      </div>
      <div class="divContainer">
      <el-tag>宽度</el-tag>
      <el-select v-model="option.yAxis.splitLine.lineStyle.width" placeholder="请选择线条宽度" size="small">
        <el-option v-for="width in line.width" :key="width.value" :label="width.label" :value="width.value">
        </el-option>
      </el-select>
      </div>
      <div class="divContainer">
      <el-tag>颜色</el-tag>
      <el-color-picker v-model="option.yAxis.splitLine.lineStyle.color"></el-color-picker>
      </div>
    </el-form-item>
    <el-form-item label="是否显示分割区域">
      <el-switch v-model="option.yAxis.splitArea.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
    </el-form-item>
  </el-form>
</template>

<script>
  import {
    line
  } from '@/util/line'
  export default {
    name: 'my-axisy',
    props: ['option'],
    data() {
      return {
        line: line
      }
    }
  }

</script>
