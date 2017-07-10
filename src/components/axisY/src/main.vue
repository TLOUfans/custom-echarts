<template>
  <el-form :model="axisYForm" label-width="160px">
    <el-form-item label="坐标轴名称">
      <div style="text-align:left; padding-left: 20px;">
        <el-input v-model="axisYForm.name" size="small" style="width:240px" @blur="axisNameBlur"></el-input>
      </div>
    </el-form-item>
    <el-form-item label="坐标轴名称样式">
      <div style="text-align:left; padding-left: 20px;">
        <el-select v-model="axisYForm.nameFonts.family" placeholder="请选择字体" size="small" @change="axisFontFamilyChange">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
        <el-select v-model="axisYForm.nameFonts.size" placeholder="请选择字体大小" size="small" @change="axisFontSizeChange">
          <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
          </el-option>
        </el-select>
        <el-select v-model="axisYForm.nameFonts.weight" placeholder="请选择字体粗细" size="small" @change="axisFontWeightChange">
          <el-option v-for="weight in fonts.weight" :key="weight.value" :label="weight.label" :value="weight.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="axisYForm.nameFonts.color" @change="axisFontColorChange"></el-color-picker>
      </div>
    </el-form-item>
    <el-form-item label="坐标轴名称位置">
      <div style="text-align:left; padding-left: 20px;">
        <el-radio-group v-model="axisYForm.position">
          <el-radio-button name="start" label="位于开端" @click.native.stop="axisPositionClick"></el-radio-button>
          <el-radio-button name="middle" label="居中" @click.native.stop="axisPositionClick"></el-radio-button>
          <el-radio-button name="end" label="位于末端" @click.native.stop="axisPositionClick"></el-radio-button>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="名称到轴线的距离">
      <div style="text-align:left; padding-left: 20px;">
        <el-input-number v-model="axisYForm.distance" :min="0" @change="distanceChaneg" style="width: 240px"></el-input-number>
      </div>
    </el-form-item>
    <el-form-item label="刻度显示方式">
      <div style="text-align:left; padding-left: 20px;">
        <el-radio-group v-model="axisYForm.display">
          <el-radio-button name="" label="自动" @click.native.stop="displayClick"></el-radio-button>
          <el-radio-button name="90" label="垂直显示" @click.native.stop="displayClick"></el-radio-button>
          <el-radio-button name="60" label="倾斜显示" @click.native.stop="displayClick"></el-radio-button>
          <el-radio-button name="none" label="不显示" @click.native.stop="displayClick"></el-radio-button>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="刻度标签样式">
      <div style="text-align:left; padding-left: 20px;">
        <el-select v-model="axisYForm.scaleFonts.family" placeholder="请选择字体" size="small" @change="scaleFontFamilyChange">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
        <el-select v-model="axisYForm.scaleFonts.size" placeholder="请选择字体大小" size="small" @change="scaleFontSizeChange">
          <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
          </el-option>
        </el-select>
        <el-select v-model="axisYForm.scaleFonts.weight" placeholder="请选择字体粗细" size="small" @change="scaleFontWeightChange">
          <el-option v-for="weight in fonts.weight" :key="weight.value" :label="weight.label" :value="weight.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="axisYForm.scaleFonts.color" @change="scaleFontColorChange"></el-color-picker>
      </div>
    </el-form-item>
    <el-form-item label="数据轴格式">
      <div style="text-align:left; padding-left: 20px;">
        <el-select v-model="axisYForm.scaleFonts.family" placeholder="请选择字体" size="small">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
      </div>
    </el-form-item>
    <el-form-item label="刻度设置">
      <div class="scaleContainer">
        <el-form-item label="最小刻度">
          <el-select v-model="axisYForm.scale.min" placeholder="请选择最小刻度" size="small">
            <el-option v-for="type in line.type" :key="type.value" :label="type.label" :value="type.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="最大刻度">
          <el-select v-model="axisYForm.scale.max" placeholder="请选择最大刻度" size="small">
            <el-option v-for="type in line.type" :key="type.value" :label="type.label" :value="type.value"></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form-item>
    <div style="text-align:left; padding:0 0 20px 90px;">
      <el-tag>分割线</el-tag>
    </div>
    <el-form-item label="是否显示">
      <div style="text-align:left; padding-left: 20px;">
        <el-switch v-model="axisYForm.showDivider" on-color="#13ce66" off-color="#ff4949" @change="dividerChange"></el-switch>
      </div>
    </el-form-item>
    <el-form-item label="线条样式">
      <div style="text-align:left; padding-left: 20px;">
        <el-select v-model="axisYForm.line.type" placeholder="请选择类型" size="small" @change="lineTypeChange">
          <el-option v-for="type in line.type" :key="type.value" :label="type.label" :value="type.value"></el-option>
        </el-select>
        <el-select v-model="axisYForm.line.width" placeholder="请选择字体大小" size="small" @change="lineWidthChange">
          <el-option v-for="width in line.width" :key="width.value" :label="width.label" :value="width.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="axisYForm.line.color" @change="lineColorChange"></el-color-picker>
      </div>
    </el-form-item>
    <div style="text-align:left;padding:0 0 20px 90px;">
      <el-tag>分割区域</el-tag>
    </div>
    <el-form-item label="是否显示">
      <div style="text-align:left; padding-left: 20px;">
        <el-switch v-model="axisYForm.showDividArea" on-color="#13ce66" off-color="#ff4949" @change="areaChange"></el-switch>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  import {fonts} from '@/util/fonts'
  import {line} from '@/util/line'
  export default {
    name: 'my-axisy',
    props: ['option', 'mainCharts'],
    data() {
      return {
        axisYForm: {
          name: '',
          nameFonts: {
            family: 'sans-serif',
            size: 12,
            weight: 'nomal',
            color: '#333'
          },
          position: '位于末端',
          distance: 15,
          display: '自动',
          scaleFonts: {
            family: 'sans-serif',
            size: 12,
            weight: 'nomal',
            color: '#333'
          },
          scale: {
            max: '',
            min: ''
          },
          showDivider: true,
          line: {
            type: 'solid',
            width: 1,
            color: '#ccc'
          },
          showDividArea: false
        },
        fonts: fonts,
        line: line
      }
    },
    methods: {
      //坐标轴名称
      axisNameBlur(event) {
        this.option.yAxis.name = event.target.value
        this.mainCharts.setOption(this.option)
      },
      //坐标轴字体
      axisFontFamilyChange(value) {
        this.option.yAxis.nameTextStyle.fontFamily = value
        this.mainCharts.setOption(this.option)
      },
      //坐标轴字体大小
      axisFontSizeChange(value) {
        this.option.yAxis.nameTextStyle.fontSize = value
        this.mainCharts.setOption(this.option)
      },
      //坐标轴字体粗细
      axisFontWeightChange(value) {
        this.option.yAxis.nameTextStyle.fontWeight = value
        this.mainCharts.setOption(this.option)
      },
      //坐标轴字体颜色
      axisFontColorChange(value) {
        this.option.yAxis.nameTextStyle.color = value
        this.mainCharts.setOption(this.option)
      },
      //坐标轴x轴位置
      axisPositionClick(event) {
        this.option.yAxis.nameLocation = event.target.name
        this.mainCharts.setOption(this.option)
      },
      //名称到轴线的距离
      distanceChaneg(value) {
        this.option.yAxis.nameGap = value
        this.mainCharts.setOption(this.option)
      },
      //显示方式
      displayClick(event) {
        let value = event.target.name
        if(value != 'none') {
          this.option.yAxis.axisLabel.show = true
          this.option.yAxis.axisLabel.rotate = value
        } else {
          this.option.yAxis.axisLabel.show = false
        }
        this.mainCharts.setOption(this.option)
      },
      //刻度字体
      scaleFontFamilyChange(value) {
        this.option.yAxis.axisLabel.textStyle.fontFamily = value
        this.mainCharts.setOption(this.option)
      },
      //刻度字体大小
      scaleFontSizeChange(value) {
        this.option.yAxis.axisLabel.textStyle.fontSize = value
        this.mainCharts.setOption(this.option)
      },
      //刻度字体粗细
      scaleFontWeightChange(value) {
        this.option.yAxis.axisLabel.textStyle.fontWeight = value
        this.mainCharts.setOption(this.option)
      },
      //刻度字体颜色
      scaleFontColorChange(value) {
        this.option.yAxis.axisLabel.textStyle.color = value
        this.mainCharts.setOption(this.option)
      },
      //分割线
      dividerChange(value) {
        this.option.yAxis.splitLine.show = value
        this.mainCharts.setOption(this.option)
      },
      //分割线类型
      lineTypeChange(value) {
        this.option.yAxis.splitLine.lineStyle.type = value
        this.mainCharts.setOption(this.option)
      },
      //分割线粗细
      lineWidthChange(value) {
        this.option.yAxis.splitLine.lineStyle.width = value
        this.mainCharts.setOption(this.option)
      },
      //分割线颜色
      lineColorChange(value) {
        this.option.yAxis.splitLine.lineStyle.color = value
        this.mainCharts.setOption(this.option)
      },
      //分割区域
      areaChange(value) {
        this.option.yAxis.splitArea.show = value
        this.mainCharts.setOption(this.option)
      }
    }
  }
</script>

<style lang="scss">
  .scaleContainer {
    text-align: left;
    label {
      width: 80px !important;
    }
  }
</style>
