<template>
  <el-form :model="option" align="left" label-width="160px">
    <el-form-item label="是否显示">
        <el-switch v-model="option.tooltip.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
    </el-form-item>
    <el-form-item label="背景颜色">
        <el-color-picker v-model="option.tooltip.backgroundColor" show-alpha></el-color-picker>
    </el-form-item>
    <el-form-item label="边框宽度">
        <el-input-number v-model="option.tooltip.borderWidth" :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="提示文本样式">
      <my-font :textStyle.sync="option.tooltip.textStyle"></my-font>
    </el-form-item>
  </el-form>
</template>

<script>
  import {fonts} from '@/util/fonts'
  export default {
    name: 'my-tip',
    props: ['option'],
    data() {
      return {
      }
    }
  }
</script>