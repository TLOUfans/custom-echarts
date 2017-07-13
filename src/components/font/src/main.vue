<template>
  <div class="fontContainer">
    <div class="divContainer">
      <el-tag>字体</el-tag>
      <el-select v-model="textStyle.fontFamily" placeholder="请选择字体" size="small">
        <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
        </el-option>
      </el-select>
    </div>
    <div class="divContainer">
      <el-tag>字号</el-tag>
      <el-select v-model="textStyle.fontSize" placeholder="请选择字体大小" size="small">
        <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
        </el-option>
      </el-select>
    </div>
    <div class="divContainer">
      <el-tag>粗细</el-tag>
      <el-select v-model="textStyle.fontWeight" placeholder="请选择字体粗细" size="small">
        <el-option v-for="weight in fonts.weight" :key="weight.value" :label="weight.label" :value="weight.value">
        </el-option>
      </el-select>
    </div>
    <div class="divContainer">
      <el-tag>颜色</el-tag>
      <el-color-picker v-model="textStyle.color"></el-color-picker>
    </div>
  </div>
</template>

<script>
  import {
    fonts
  } from '@/util/fonts'
  export default {
    name: 'my-font',
    props: ['textStyle'],
    data() {
      return {
        fonts: fonts
      }
    }
  }

</script>
