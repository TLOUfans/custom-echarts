<template>
  <el-form :model="advanceForm" label-width="160px">
    <el-form-item label="图形主题">
      <div style="text-align: left; padding-left: 20px">
        <el-select v-model="advanceForm.theme" placeholder="请选择主题" size="small" @change="themeChange">
          <el-option v-for="theme in themes" :key="theme.value" :label="theme.label" :value="theme.value">
          </el-option>
        </el-select>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  import {themes} from '@/util/theme'
  export default {
    name: 'my-advance',
    props: ['option', 'mainCharts'],
    data() {
      return {
        advanceForm: {
          theme: 'shine'
        },
        themes: themes
      }
    },
    methods: {
      themeChange(value) {
        debugger
        this.$echarts.dispose(this.mainCharts)
        this.mainCharts = this.$echarts.init(document.getElementById('myCharts'), value)
        this.mainCharts.setOption(this.option)
      }
    }
  }
</script>