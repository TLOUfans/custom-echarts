<template>
  <el-form :model="option" align="left" label-width="130px">
    <el-form-item label="画布大小">
      <div class="sliderContainer">
        <el-tag>宽度</el-tag>
        <el-slider v-model="baseSetting.width" :max="1000" :min="400" @change="handleWidthChange"></el-slider>
        <el-tag>高度</el-tag>
        <el-slider v-model="baseSetting.height" :max="800" :min="200" @change="handleHeightChange"></el-slider>
      </div>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker v-model="option.backgroundColor" show-alpha></el-color-picker>
    </el-form-item>
    <el-form-item label="边距" v-if="!isPie">
      <div class="divContainer">
        <el-tag>左</el-tag>
        <el-input-number v-model="option.grid.x"></el-input-number>
      </div>
      <div class="divContainer">
        <el-tag>上</el-tag>
        <el-input-number v-model="option.grid.y"></el-input-number>
      </div>
      <div class="divContainer">
        <el-tag>右</el-tag>
        <el-input-number v-model="option.grid.x1"></el-input-number>
      </div>
      <div class="divContainer">
        <el-tag>下</el-tag>
        <el-input-number v-model="option.grid.y1"></el-input-number>
      </div>
    </el-form-item>
    <el-form-item label="初始化动画">
      <el-switch v-model="option.animation" on-color="#13ce66" off-color="#ff4949"></el-switch>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'my-base',
    props: ['option', 'mainCharts', 'isPie'],
    data() {
      return {
        baseSetting: {
          width: 600,
          height: 400
        }
      }
    },
    methods: {
      handleWidthChange(value) {
        $('#myCharts').width(value)
        this.mainCharts.resize()
      },
      handleHeightChange(value) {
        $('#myCharts').height(value)
        this.mainCharts.resize()
      }
    }
  }

</script>

