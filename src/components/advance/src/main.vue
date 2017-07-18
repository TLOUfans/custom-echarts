<template>
  <el-form :model="option" align="left" label-width="130px">
    <el-form-item label="图形主题">
      <el-select v-model="option.theme" placeholder="请选择主题" size="small" @change="themeChange">
        <el-option v-for="theme in themes" :key="theme.value" :label="theme.label" :value="theme.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
  import {themes} from '@/util/theme'
  export default {
    name: 'my-advance',
    props: ['option', 'activeName', 'disabledTab'],
    data() {
      return {
        themes: themes
      }
    },
    methods: {
      themeChange(value) {
        this.$emit('nextStepClick', value)
      }
    }
  }
</script>