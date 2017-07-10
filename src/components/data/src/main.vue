<template>
  <el-form :model="mappingMethodForm" label-width="160px">
    <el-form-item label="汇总、计算项作图">
      <el-checkbox-group v-model="mappingMethodForm.sumMapping" style="text-align: left;padding-left: 20px;">
        <el-checkbox label="" name="sumMapping"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="列汇总、计算项作图">
      <el-checkbox-group v-model="mappingMethodForm.cloumnSumMapping" style="text-align: left;padding-left: 20px;">
        <el-checkbox label="" name="cloumnSumMapping"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="作图方式">
      <div style="text-align:left; padding-left:20px">
        <el-radio-group v-model="mappingMethodForm.mappingMethod">
          <el-radio label="按行全选"></el-radio>
          <el-radio label="按列全选"></el-radio>
          <el-radio label="按行"></el-radio>
          <el-radio label="按列"></el-radio>
        </el-radio-group>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'my-data',
    data() {
      return {
        mappingMethodForm: {
          sumMapping: '',
          cloumnSumMapping: '',
          mappingMethod: ''
        }
      }
    }
  }

</script>
