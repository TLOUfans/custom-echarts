<template>
  <el-form :model="toolForm" label-width="160px">
    <el-form-item label="数据视图">
      <div style="text-align:left;padding-left:20px">
        <el-switch v-model="toolForm.dataView" on-color="#13ce66" off-color="#ff4949" @change="dataViewChange"></el-switch>
      </div>
    </el-form-item>
    <el-form-item label="数据区域缩放">
      <div style="text-align:left;padding-left:20px">
        <el-switch v-model="toolForm.scale" on-color="#13ce66" off-color="#ff4949" @change="scaleChange"></el-switch>
      </div>
    </el-form-item>
    <el-form-item label="配置项还原">
      <div style="text-align:left;padding-left:20px">
        <el-switch v-model="toolForm.reset" on-color="#13ce66" off-color="#ff4949" @change="resetChange"></el-switch>
      </div>
    </el-form-item>
    <el-form-item label="保存图片">
      <div style="text-align:left;padding-left:20px">
        <el-switch v-model="toolForm.saveAsImage" on-color="#13ce66" off-color="#ff4949" @change="dsaveAsImageChange"></el-switch>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'my-tool',
    props: ['option', 'mainCharts'],
    data() {
      return {
        toolForm: {
          dataView: false,
          scale: false,
          reset: false,
          saveAsImage: false
        }
      }
    },
    methods: {
        dataViewChange(value) {
          this.option.toolbox.feature.dataView.show = value
          this.mainCharts.setOption(this.option)
        },
        scaleChange(value) {
          this.option.toolbox.feature.dataZoom.show = value
          this.mainCharts.setOption(this.option)
        },
        resetChange(value) {
          this.option.toolbox.feature.restore.show = value
          this.mainCharts.setOption(this.option)
        },
        dsaveAsImageChange(value) {
          this.option.toolbox.feature.saveAsImage.show = value
          this.mainCharts.setOption(this.option)
        }
      }
  }

</script>
