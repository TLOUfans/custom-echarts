<template>
  <el-form :model="advanceForm" align="left" label-width="160px">
    <el-form-item label="图形主题">
      <el-select v-model="advanceForm.theme" placeholder="请选择主题" size="small">
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
    props: ['option'],
    data() {
      return {
        advanceForm: {
          theme: 'shine'
        },
        themes: themes
      }
    },
    methods: {
    }
  }
</script>