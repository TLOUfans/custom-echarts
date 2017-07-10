<template>
  <el-form :model="titleForm" label-width="160px">
    <el-form-item label="标题">
      <div style="text-align: left; padding-left: 20px">
        <el-input v-model="titleForm.title" size="small" style="width: 240px;" @blur="handleTitleBlur"></el-input>
      </div>
    </el-form-item>
    <el-form-item label="标题样式">
      <div style="text-align: left; padding-left: 20px">
        <el-select v-model="titleForm.fonts.family" placeholder="请选择字体" size="small" @change="handleFontFamilyChange">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
        <el-select v-model="titleForm.fonts.size" placeholder="请选择字体大小" size="small" @change="handleFontSizeChange">
          <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
          </el-option>
        </el-select>
        <el-select v-model="titleForm.fonts.weight" placeholder="请选择字体粗细" size="small" @change="handleFontWeightChange">
          <el-option v-for="weight in fonts.weight" :key="weight.value" :label="weight.label" :value="weight.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="titleForm.fonts.color" @change="handleTitleColorChange"></el-color-picker>
      </div>
    </el-form-item>
    <el-form-item label="水平位置">
      <div style="text-align:left;padding-left:20px">
        <el-radio-group v-model="titleForm.position">
          <el-radio-button name="left" label="居左" @click.native.stop="handlePositionClick"></el-radio-button>
          <el-radio-button name="center" label="居中" @click.native.stop="handlePositionClick"></el-radio-button>
          <el-radio-button name="right" label="居右" @click.native.stop="handlePositionClick"></el-radio-button>
        </el-radio-group>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  import {fonts} from '@/util/fonts'
  export default {
    name: 'my-title',
    props: ['option', 'mainCharts'],
    data() {
      return {
        titleForm: {
          title: '',
          fonts: {
            family: 'sans-serif',
            size: 18,
            weight: 'nomal',
            color: '#333'
          },
          position: '居左'
        },
        fonts: fonts
      }
    },
    methods: {
      //标题样式
      handleFontFamilyChange(value) {
        this.option.title.textStyle.fontFamily = value
        this.mainCharts.setOption(this.option)
      },
      //标题内容
      handleTitleBlur(event) {
        let value = event.target.value
        this.option.title.text = value
        this.mainCharts.setOption(this.option)
      },
      //标题字体尺寸
      handleFontSizeChange(value) {
        this.option.title.textStyle.fontSize = value
        this.mainCharts.setOption(this.option)
      },
      //标题字体粗细
      handleFontWeightChange(value) {
        this.option.title.textStyle.fontWeight = value
        this.mainCharts.setOption(this.option)
      },
      //标题颜色
      handleTitleColorChange(color) {
        this.option.title.textStyle.color = color
        this.mainCharts.setOption(this.option)
      },
      //标题水平位置变化
      handlePositionClick(event) {
        this.option.title.x = event.currentTarget.firstElementChild.name
        this.mainCharts.setOption(this.option)
      }
    },
    mounted() {
      this.titleForm.title = this.option.title.text
    }
  }
</script>
