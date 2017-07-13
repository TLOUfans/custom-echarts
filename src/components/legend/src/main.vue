<template>
  <el-form :model="option" align="left" label-width="160px">
    <el-form-item label="位置">
      <div class="divContainer">
        <el-tag>水平</el-tag>
        <el-radio-group v-model="option.legend.left">
          <el-radio label="auto">自动</el-radio>
          <el-radio label="left">左侧</el-radio>
          <el-radio label="right">右侧</el-radio>
          <el-radio label="middle">中间</el-radio>
        </el-radio-group>
      </div>
      <div class="divContainer">
        <el-tag>垂直</el-tag>
        <el-radio-group v-model="option.legend.top">
          <el-radio label="auto">自动</el-radio>
          <el-radio label="top">上方</el-radio>
          <el-radio label="bottom">下方</el-radio>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="文字样式">
      <my-font :textStyle.sync="option.legend.textStyle"></my-font>
    </el-form-item>
  </el-form>
</template>

<script>
  import {
    fonts
  } from '@/util/fonts'
  export default {
    name: 'my-legend',
    props: ['option'],
    data() {
      return {
        fonts: fonts
      }
    }
  }

</script>
