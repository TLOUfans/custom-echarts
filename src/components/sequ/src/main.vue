<template>
  <el-form :model="sequForm" label-width="160px">
    <el-form-item label="柱子宽度">
      <div style="text-align: left;padding-left: 20px">
        <el-input-number v-model="sequForm.width" :min="0" @change="widthChange"></el-input-number>
      </div>
    </el-form-item>
    <div style="text-align:left; padding:0 0 20px 90px;">
      <el-tag>普通状态</el-tag>
    </div>
    <el-form-item label="系列主色">
      <div style="text-align: left;padding-left: 20px">
        <el-color-picker v-model="sequForm.normal.color" @change="normalColorChange"></el-color-picker>
      </div>
    </el-form-item>
    <el-form-item label="数据项标签">
      <div style="text-align: left;padding-left: 20px">
        <el-switch v-model="sequForm.normal.label" on-color="#13ce66" off-color="#ff4949" @change="normalLabelChange"></el-switch>
      </div>
    </el-form-item>
    <el-form-item label="位置">
      <div style="text-align: left;padding-left: 20px">
        <el-radio-group v-model="sequForm.normal.position" @change="normalPositionChange">
          <el-radio label="top">居上</el-radio>
          <el-radio label="insideBottom">居下</el-radio>
          <el-radio label="left">居左</el-radio>
          <el-radio label="right">居右</el-radio>
          <el-radio label="inside">内部</el-radio>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="文本样式">
      <div style="text-align: left;padding-left: 20px">
        <el-select v-model="sequForm.normal.fonts.family" placeholder="请选择字体" size="small" @change="normalFontsFamilyChange">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
        <el-select v-model="sequForm.normal.fonts.size" placeholder="请选择字体大小" size="small" @change="normalFontsSizeChange">
          <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
          </el-option>
        </el-select>
        <el-select v-model="sequForm.normal.fonts.weight" placeholder="请选择字体粗细" size="small" @change="normalFontsWeightChange">
          <el-option v-for="weight in fonts.weight" :key="weight.value" :label="weight.label" :value="weight.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="sequForm.normal.fonts.color" @change="normalFontsColorChange"></el-color-picker>
      </div>
    </el-form-item>
    <div style="text-align:left; padding:0 0 20px 90px;">
      <el-tag>高亮状态</el-tag>
    </div>
    <el-form-item label="系列主色">
      <div style="text-align: left;padding-left: 20px">
        <el-color-picker v-model="sequForm.emphasis.color" @change="emphasisColorChange"></el-color-picker>
      </div>
    </el-form-item>
    <el-form-item label="数据项标签">
      <div style="text-align: left;padding-left: 20px">
        <el-switch v-model="sequForm.emphasis.label" on-color="#13ce66" off-color="#ff4949" @change="emphasisLabelChange"></el-switch>
      </div>
    </el-form-item>
    <el-form-item label="位置">
      <div style="text-align: left;padding-left: 20px">
        <el-radio-group v-model="sequForm.emphasis.position" @change="emphasisPositionChange">
          <el-radio label="top">居上</el-radio>
          <el-radio label="insideBottom">居下</el-radio>
          <el-radio label="left">居左</el-radio>
          <el-radio label="right">居右</el-radio>
          <el-radio label="inside">内部</el-radio>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="文本样式">
      <div style="text-align: left;padding-left: 20px">
        <el-select v-model="sequForm.emphasis.fonts.family" placeholder="请选择字体" size="small" @change="emphasisFontsFamilyChange">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
        <el-select v-model="sequForm.emphasis.fonts.size" placeholder="请选择字体大小" size="small" @change="emphasisFontsSizeChange">
          <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
          </el-option>
        </el-select>
        <el-select v-model="sequForm.emphasis.fonts.weight" placeholder="请选择字体粗细" size="small" @change="emphasisFontsWeightChange">
          <el-option v-for="weight in fonts.weight" :key="weight.value" :label="weight.label" :value="weight.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="sequForm.emphasis.fonts.color" @change="emphasisFontsColorChange"></el-color-picker>
      </div>
    </el-form-item>
    <div style="text-align:left; padding:0 0 20px 90px;">
      <el-tag>数据标注设置</el-tag>
    </div>
    <el-form-item label="是否显示">
      <div style="text-align: left;padding-left: 20px">
        <el-switch v-model="sequForm.markPoint" on-color="#13ce66" off-color="#ff4949" @change="markPointChange"></el-switch>
      </div>
    </el-form-item>
    <div style="text-align:left; padding:0 0 20px 90px;">
      <el-tag>数据线设置</el-tag>
    </div>
    <el-form-item label="标线类型">
      <div style="text-align: left;padding-left: 20px">
        <el-checkbox-group v-model="sequForm.lineType" @change="lineTypeChange">
          <el-checkbox label="average">平均值</el-checkbox>
          <el-checkbox label="min">最小值</el-checkbox>
          <el-checkbox label="max">最大值</el-checkbox>
        </el-checkbox-group>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  import {
    fonts
  } from '@/util/fonts'
  export default {
    name: 'my-sequ',
    props: ['option', 'mainCharts'],
    data() {
      return {
        sequForm: {
          width: '20',
          normal: {
            color: '',
            label: false,
            position: 'inside',
            fonts: {
              family: 'sans-serif',
              size: 12,
              weight: 'normal',
              color: '#fff'
            }
          },
          emphasis: {
            color: '',
            label: false,
            position: 'inside',
            fonts: {
              family: 'sans-serif',
              size: 12,
              weight: 'normal',
              color: '#fff'
            }
          },
          markPoint: false,
          lineType: [],
          lineColor: ''
        },
        fonts: fonts
      }
    },
    methods: {
      //柱子宽度变化
      widthChange(value) {
        this.option.series[0].barWidth = value
        this.mainCharts.setOption(this.option)
      },
      //系列主色
      normalColorChange(value) {
        this.option.series[0].itemStyle.normal.color = value
        this.mainCharts.setOption(this.option)
      },
      //数据项标签
      normalLabelChange(value) {
        this.option.series[0].label.normal.show = value
        this.mainCharts.setOption(this.option)
      },
      //位置
      normalPositionChange(value) {
        this.option.series[0].label.normal.position = value
        this.mainCharts.setOption(this.option)
      },
      //字体
      normalFontsFamilyChange(value) {
        this.option.series[0].label.normal.fontFamily = value
        this.mainCharts.setOption(this.option)
      },
      //字体大小
      normalFontsSizeChange(value) {
        this.option.series[0].label.normal.textStyle.fontSize = value
        this.mainCharts.setOption(this.option)
      },
      //字体宽度
      normalFontsWeightChange(value) {
        this.option.series[0].label.normal.textStyle.fontWeight = value
        this.mainCharts.setOption(this.option)
      },
      //字体颜色
      normalFontsColorChange(value) {
        this.option.series[0].label.normal.textStyle.color = value
        this.mainCharts.setOption(this.option)
      },
      emphasisColorChange(value) {
        this.option.series[0].itemStyle.emphasis.color = value
        this.mainCharts.setOption(this.option)
      },
      emphasisLabelChange(value) {
        this.option.series[0].label.emphasis.show = value
        this.mainCharts.setOption(this.option)
      },
      emphasisPositionChange(value) {
        this.option.series[0].label.emphasis.position = value
        this.mainCharts.setOption(this.option)
      },
      emphasisFontsFamilyChange(value) {
        this.option.series[0].label.emphasis.fontFamily = value
        this.mainCharts.setOption(this.option)
      },
      emphasisFontsSizeChange(value) {
        this.option.series[0].label.normal.emphasis.fontSize = value
        this.mainCharts.setOption(this.option)
      },
      emphasisFontsWeightChange(value) {
        this.option.series[0].label.emphasis.textStyle.fontWeight = value
        this.mainCharts.setOption(this.option)
      },
      emphasisFontsColorChange(value) {
        this.option.series[0].label.emphasis.textStyle.color = value
        this.mainCharts.setOption(this.option)
      },
      //数据标注
      markPointChange(value) {
        this.option.series[0].markPoint.data.length = 0
        if (value) {
          this.option.series[0].markPoint.data.push({
            type: 'max',
            name: '最大值'
          })
          this.option.series[0].markPoint.data.push({
            type: 'min',
            name: '最小值'
          })
        } else {
          this.option.series[0].markPoint.data.length = 0
        }
        this.mainCharts.setOption(this.option)
      },
      //线标类型
      lineTypeChange(event) {
        this.option.series[0].markLine.data.length = 0
        this.sequForm.lineType.forEach((o, i) => {
          let obj = {}
          if (o == 'average') {
            obj.type = o
            obj.name = '平均值'
          } else if (o == 'min') {
            obj.type = o
            obj.name = '最小值'
          } else if (o == 'max') {
            obj.type = o
            obj.name = '最大值'
          }
          this.option.series[0].markLine.data.push(obj)
        })
        this.mainCharts.setOption(this.option)
      },
      //线标颜色
      lineColorChange(value) {
        
      }
    }
  }

</script>
