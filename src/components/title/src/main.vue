<template>
  <el-form :model="option" label-width="160px" align="left">
    <el-form-item label="标题">
      <el-input v-model="option.title.text" size="small" style="width: 240px;"></el-input>
    </el-form-item>
    <el-form-item label="标题样式">
      <my-font :textStyle.sync="option.title.textStyle"></my-font>
    </el-form-item>
    <el-form-item label="水平位置">
      <div style="text-align:left;padding-left:20px">
        <el-radio-group v-model="option.title.x">
          <el-radio label="left">居左</el-radio>
          <el-radio label="center">居中</el-radio>
          <el-radio label="right">居右</el-radio>
        </el-radio-group>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'my-title',
    props: ['option'],
    data() {
      return {
      }
    }
  }

</script>
