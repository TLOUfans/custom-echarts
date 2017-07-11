<template>
  <el-form :model="tipForm" label-width="160px">
    <el-form-item label="是否显示">
      <div style="text-align:left; padding-left: 20px;">
        <el-switch v-model="tipForm.showTip" on-color="#13ce66" off-color="#ff4949" @change="tipChange"></el-switch>
      </div>
    </el-form-item>
    <el-form-item label="背景颜色">
      <div style="text-align:left; padding-left: 20px;">
        <el-color-picker v-model="tipForm.color" show-alpha @change="bgColorChange"></el-color-picker>
      </div>
    </el-form-item>
    <el-form-item label="边框宽度">
      <div style="text-align:left; padding-left: 20px;">
        <el-input-number v-model="tipForm.borderWidth" :min="0" @change="borderWidthChange"></el-input-number>
      </div>
    </el-form-item>
    <el-form-item label="提示文本样式">
      <div style="text-align:left; padding-left: 20px;">
        <el-select v-model="tipForm.fonts.family" placeholder="请选择字体" size="small" @change="fontFamilyChange">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
        <el-select v-model="tipForm.fonts.size" placeholder="请选择字体大小" size="small" @change="fontSizeChange">
          <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
          </el-option>
        </el-select>
        <el-select v-model="tipForm.fonts.weight" placeholder="请选择字体粗细" size="small" @change="fontWeightChange">
          <el-option v-for="weight in fonts.weight" :key="weight.value" :label="weight.label" :value="weight.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="tipForm.fonts.color" @change="fontColorChange"></el-color-picker>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  import {fonts} from '@/util/fonts'
  export default {
    name: 'my-tip',
    props: ['option', 'mainCharts'],
    data() {
      return {
        tipForm: {
          showTip: true,
          color: 'rgba(50, 50, 50, 0.7)',
          borderWidth: 0,
          fonts: {
            family: 'sans-serif',
            size: 14,
            weight: 'nomal',
            color: '#fff'
          }
        },
        fonts: fonts
      }
    },
    methods: {
      tipChange(value) {
        this.option.tooltip.show = value
        this.mainCharts.setOption(this.option)
      },
      bgColorChange(value) {
        this.option.tooltip.backgroundColor = value
        this.mainCharts.setOption(this.option)
      },
      borderWidthChange(value) {
        this.option.tooltip.borderWidth = value
        this.mainCharts.setOption(this.option)
      },
      fontFamilyChange(value) {
        this.option.tooltip.textStyle.fontFamily = value
        this.mainCharts.setOption(this.option)
      },
      fontSizeChange(value) {
        this.option.tooltip.textStyle.fontSize = value
        this.mainCharts.setOption(this.option)
      },
      fontWeightChange(value) {
        this.option.tooltip.textStyle.fontWeight = value
        this.mainCharts.setOption(this.option)
      },
      fontColorChange(value) {
        this.option.tooltip.textStyle.color = value
        this.mainCharts.setOption(this.option)
      }
    }
  }
</script>