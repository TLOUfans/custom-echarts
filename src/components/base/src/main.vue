<template>
  <el-form :model="baseSetting" label-width="160px">
    <el-form-item label="画布大小">
      <div style="text-align:left; padding:0 20px 0 20px;">
        <div class="block">
          <span class="demonstration">宽度</span>
          <el-slider v-model="baseSetting.width" :max="1000" :min="400" @change="handleWidthChange"></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">高度</span>
          <el-slider v-model="baseSetting.height" :max="800" :min="200" @change="handleHeightChange"></el-slider>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="背景颜色">
      <div style="text-align:left; padding-left: 20px">
        <el-color-picker v-model="baseSetting.color" show-alpha @change="handleBgColorChange"></el-color-picker>
      </div>
    </el-form-item>
    <el-form-item label="边距">
      <div class="marginGroup" style="text-align:left; padding-left: 20px;">
        <span class="demonstration">左</span>
        <el-input v-model="baseSetting.margin.left" size="small" style="width:50px;margin-right: 5px;"></el-input>
        <span class="demonstration">上</span>
        <el-input v-model="baseSetting.margin.top" size="small" style="width:50px;margin-right: 5px;"></el-input>
        <span class="demonstration">右</span>
        <el-input v-model="baseSetting.margin.right" size="small" style="width:50px;margin-right: 5px;"></el-input>
        <span class="demonstration">下</span>
        <el-input v-model="baseSetting.margin.bottom" size="small" style="width:50px;"></el-input>
      </div>
    </el-form-item>
    <el-form-item label="初始化动画">
      <div style="text-align:left; padding-left: 20px;">
        <el-switch v-model="baseSetting.animate" on-color="#13ce66" off-color="#ff4949" @change="handleAnimateChange">
        </el-switch>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'my-base',
    props: ['option', 'mainCharts'],
    data() {
      return {
        baseSetting: {
          width: 600,
          height: 400,
          color: 'rgba(255, 255, 255, 1)',
          margin: {
            left: '80',
            top: '60',
            right: '80',
            bottom: '60'
          },
          animate: true
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
      },
      handleAnimateChange(value) {
        this.animate = value
        this.option.animation = this.animate
        this.mainCharts.setOption(this.option)
      },
      handleBgColorChange(color) {
        this.option.backgroundColor = color
        this.mainCharts.setOption(this.option)
      }
    },
    mounted() {
      $('.marginGroup').on('blur', 'input', () => {
        this.option.grid.x = $('.marginGroup').find('input')[0].value
        this.option.grid.y = $('.marginGroup').find('input')[1].value
        this.option.grid.x1 = $('.marginGroup').find('input')[2].value
        this.option.grid.y1 = $('.marginGroup').find('input')[3].value
        this.mainCharts.setOption(this.option)
      })
    }
  }

</script>
