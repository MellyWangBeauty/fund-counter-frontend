<template>
  <div class="container">
    <div class="flex-center">风险测评</div>
    <el-form :model="form" @submit.prevent="submitForm">
      <el-form-item>
        <p>问题1：你的年龄是？</p>
        <el-radio-group v-model="answers.age">
          <el-radio :label="1">18岁以下</el-radio>
          <el-radio :label="2">18-30岁</el-radio>
          <el-radio :label="3">31-50岁</el-radio>
          <el-radio :label="4">50岁以上</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <p>问题2：你的投资经验是？</p>
        <el-radio-group v-model="answers.experience">
          <el-radio :label="1">没有任何经验</el-radio>
          <el-radio :label="2">有一些经验</el-radio>
          <el-radio :label="3">有丰富经验</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="submit-button flex-center">
        <el-button type="primary" native-type="submit">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answers: {
        age: null,
        experience: null,
        // 其他问题的答案...
      },
    };
  },
  methods: {
    submitForm() {
      // 在这里执行提交表单的逻辑
      // 可以使用this.answers来获取用户的选择和回答
      console.log(this.answers);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  padding: 2%;
  max-width: 500px;
  margin: 0 auto;
  background-color: white;

  .el-form-item {
    p {
      width: 100%;
    }
  }

  :deep(.el-radio-group) {
    display: block;
  }
  :deep(.el-radio) {
    display: block;
  }
}
</style>
