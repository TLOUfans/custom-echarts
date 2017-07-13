<template>
  <el-table :data="tableData" width="100%" border>
    <el-table-column prop="label" label="字段"></el-table-column>
    <el-table-column label="映射"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'my-mapping',
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      
    }
  }
</script>