<template>
  <div>
    <el-form label-width="160px" align="left">
      <el-form-item label="选择x轴">
        <el-select>
          <el-option v-for="m in meta" :value="m.name" :label="m.name"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table :data="meta" width="100%" border @select="checkboxSelect">
      <el-table-column label="操作" type="selection"></el-table-column>
      <el-table-column label="数据列" prop="name"></el-table-column>
      <el-table-column label="数据类型" prop="type"></el-table-column>
      <el-table-column label="映射">
        <template scope="scope">
          <el-input :value="scope.row.name"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="value" width="100%" border>
      <el-table-column v-for="s in selection" :prop="s.name" :label="s.name" header-align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'my-data',
    props: ['meta', 'value', 'selection'],
    data() {
      return {
      }
    },
    methods: {
      checkboxSelect(selection, row) {
        this.$emit('rowSelect', selection)
      }
    }
  }

</script>
