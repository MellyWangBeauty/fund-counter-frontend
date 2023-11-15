<template>
  <div class="container">
    <div class="flex-center title">绑定银行卡</div>
    <el-form :model="form" @submit.prevent="submitForm">
      <el-row class="row" :gutter="30">
        <el-col :span="12">
          <el-form-item label="客户ID">
            <el-input
              v-model="form.userId"
              class="input-field"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="12">
          <el-form-item label="客户姓名">
            <el-input
              v-model="form.userName"
              class="input-field"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row class="row" :gutter="30">
        <el-col :span="12">
          <el-form-item label="银行卡号">
            <el-input
              v-model="form.idCardNumber"
              class="input-field"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="12">
          <el-form-item label="开户银行">
            <el-input
              v-model="form.issuingBank"
              class="input-field"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row class="row" :gutter="30">
        <el-col :span="12">
          <el-form-item label="电话号码">
            <el-input
              v-model="form.phoneNumber"
              class="input-field"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="12">
          <el-form-item label="身份证号">
            <el-input
              v-model="form.cardId"
              class="input-field"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>

      <div class="submit-button flex-center">
        <el-button type="primary" native-type="submit">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup>
const form = ref({
  userId: "",
  userName: "",
  idCardNumber: "",
  issuingBank: "",
  phoneNumber: "",
  cardId: "",
});
const submitForm = () => {};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  padding: 2%;
  max-width: 700px;
  margin: 0 auto;
  background-color: white;
  .title {
    margin-bottom: 20px;
  }

  .input-field {
    width: 100%;
  }

  :deep(.el-radio-group) {
    display: block;
  }
  :deep(.el-radio) {
    display: block;
  }
}
</style>
