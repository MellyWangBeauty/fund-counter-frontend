<template>
  <div class="container">
    <div class="flex-center title">填写开户信息</div>
    <el-form :model="form" @submit.prevent="submitForm">
      <el-row class="row" :gutter="30">
        <el-col :span="12">
          <el-form-item label="客户姓名">
            <el-input
              v-model="form.name"
              class="input-field"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="12">
          <el-form-item label="客户类型">
            <el-input
              v-model="form.type"
              class="input-field"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="12"
          ><el-form-item label="证件类型">
            <el-input v-model="form.id_type" class="input-field"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="证件号码">
            <el-input v-model="form.id_card" class="input-field"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item label="证件有效期">
            <el-input
              v-model="form.id_card_expiry_date"
              class="input-field"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机号">
            <el-input
              v-model="form.phone_number"
              class="input-field"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="12"
          ><el-form-item label="是否已婚">
            <el-select
              v-model="form.is_married"
              placeholder="请选择"
              class="input-field"
            >
              <el-option label="是" value="1" />
              <el-option label="否" value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别">
            <el-select
              v-model="form.gender"
              placeholder="请选择"
              class="input-field"
            >
              <el-option label="男" value="1" />
              <el-option label="女" value="0" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="submit-button flex-center">
        <el-button type="primary" native-type="submit">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup>
const form = ref({
  name: "",
  type: "",
  id_type: "",
  id_card: "",
  id_card_expiry_date: "",
  is_married: "",
  phone_number: "",
  gender: "",
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
