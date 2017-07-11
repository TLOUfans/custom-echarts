<template>
  <el-form :model="legendForm" label-width="160px">
    <el-form-item label="位置">
      <div style="text-align:left; padding-left: 20px;">
        <el-radio-group v-model="legendForm.postion">
          <el-radio-button name="top" label="上方" @click.native.stop="displayClick"></el-radio-button>
          <el-radio-button name="bottom" label="下方" @click.native.stop="displayClick"></el-radio-button>
          <el-radio-button name="left" label="左侧" @click.native.stop="displayClick"></el-radio-button>
          <el-radio-button name="right" label="右侧" @click.native.stop="displayClick"></el-radio-button>
          <el-radio-button name="middle" label="中间" @click.native.stop="displayClick"></el-radio-button>
          <el-radio-button name="none" label="无图例" @click.native.stop="displayClick"></el-radio-button>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="文字样式">
      <div style="text-align:left; padding-left: 20px;">
        <el-select v-model="legendForm.fonts.family" placeholder="请选择字体" size="small" @change="fontFamilyChange">
          <el-option v-for="family in fonts.family" :key="family.value" :label="family.label" :value="family.value">
          </el-option>
        </el-select>
        <el-select v-model="legendForm.fonts.size" placeholder="请选择字体大小" size="small" @change="fontSizeChange">
          <el-option v-for="size in fonts.size" :key="size.value" :label="size.label" :value="size.value">
          </el-option>
        </el-select>
        <el-select v-model="legendForm.fonts.weight" placeholder="请选择字体粗细" size="small" @change="fontWeightChange">
          <el-option v-for="weight in fonts.weight" :key="weight.value" :label="weight.label" :value="weight.value">
          </el-option>
        </el-select>
        <br>
        <el-color-picker v-model="legendForm.fonts.color" @change="fontColorChange"></el-color-picker>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  import {fonts} from '@/util/fonts'
  export default {
    name: 'my-legend',
    props: ['option', 'mainCharts'],
    data() {
      return {
        legendForm: {
          postion: '上方',
          fonts: {
            family: 'sans-serif',
            size: 12,
            weight: 'nomal',
            color: '#333'
          }
        },
        fonts: fonts
      }
    },
    methods: {
      displayClick(event) {
        let name = event.target.name
        if (name) {
          if (name == 'right' || name == 'left' || name == 'middle') {
            this.option.legend.show = true
            this.option.legend.left = name
          } else if (name == 'top' || name == 'bottom') {
            this.option.legend.show = true
            this.option.legend.top = name
          } else if (name == 'none') {
            this.option.legend.show = false
          }
          this.mainCharts.setOption(this.option)
        }
      },
      fontFamilyChange(value) {
        this.option.legend.textStyle.fontFamily = value
        this.mainCharts.setOption(this.option)
      },
      fontSizeChange(value) {
        this.option.legend.textStyle.fontSize = value
        this.mainCharts.setOption(this.option)
      },
      fontWeightChange(value) {
        this.option.legend.textStyle.fontWeight = value
        this.mainCharts.setOption(this.option)
      },
      fontColorChange(value) {
        this.option.legend.textStyle.color = value
        this.mainCharts.setOption(this.option)
      }
    }
  }

</script>
