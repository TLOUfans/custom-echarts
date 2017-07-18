<template>
  <el-form label-width="160px" align="right">
    <el-form-item label="自定义代码" class="form">
      <el-button @click="customCodeBtnClick" class="runBtn">Run</el-button>
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="myOption">
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'my-extend',
    props: ['option'],
    data() {
      return {
        myOption: this.option
      }
    },
    methods: {
      customCodeBtnClick() {
        this.$emit('customCodeBtnClick', this.myOption)
      }
    },
    watch:{
      option(val) {
        this.myOption = val
      }
    }
  }
</script>

<style lang="scss">
  .form {
    position: relative;
    .runBtn {
      position: fixed;
    }
    textarea {
      width: 100%;
    }
  }
</style>