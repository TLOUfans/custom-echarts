<template>
  <el-form :model="option" align="left" label-width="160px" :inline="true">
    <el-form-item label="数据视图">
      <el-switch v-model="option.toolbox.feature.dataView.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
    </el-form-item>
    <el-form-item label="配置项还原">
      <el-switch v-model="option.toolbox.feature.restore.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
    </el-form-item>
    <el-form-item label="保存图片">
      <el-switch v-model="option.toolbox.feature.saveAsImage.show" on-color="#13ce66" off-color="#ff4949"></el-switch>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'my-tool',
    props: ['option'],
    data() {
      return {

      }
    }
  }

</script>
