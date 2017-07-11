<template>
  <el-table :data="tableData" width="100%" border>
    <el-table-column prop="label" label="字段"></el-table-column>
    <el-table-column label="映射"></el-table-column>
  </el-table>
</template>

<script>
  import {bidApplication} from '@/api'
  export default {
    name: 'my-mapping',
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      bidApplication().then(res => {
        let title = JSON.parse(JSON.parse(res).data.meta)
        Object.keys(title).forEach((o, i) => {
          this.tableData.push({
            label: o,
            value: title[o]
          })
        })
        console.log(this.tableData)
      })
    }
  }
</script>