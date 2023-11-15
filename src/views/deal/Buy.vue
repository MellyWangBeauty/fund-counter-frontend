<template>
  <div class="container">
    <div class="flex-center title">产品购买</div>
    <el-form :model="form" @submit.prevent="submitForm">
      <el-row class="row" :gutter="30">
        <el-col :span="12">
          <el-form-item label="委托方式">
            <el-select
              v-model="form.entrustMethod"
              placeholder="请选择"
              class="input-field"
            >
              <el-option label="方式0" value="0" />
              <el-option label="方式1" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="客户账号">
            <el-input v-model="form.account" class="input-field"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item label="客户ID">
            <el-input v-model="form.userId" class="input-field"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12"
          ><el-form-item label="客户姓名">
            <el-input v-model="form.userName" class="input-field"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item label="银行卡">
            <el-select
              v-model="form.cardType"
              placeholder="请选择"
              class="input-field"
            >
              <el-option label="银行卡0" value="0" />
              <el-option label="银行卡1" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行卡号">
            <el-input
              v-model="form.cardNumber"
              class="input-field"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item label="产品代码">
            <el-input v-model="form.productCode" class="input-field"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="购买金额">
            <el-input
              v-model="form.purchaseNumber"
              class="input-field"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item label="资金方式">
            <el-select
              v-model="form.paymentMethod"
              placeholder="请选择"
              class="input-field"
            >
              <el-option label="方式0" value="0" />
              <el-option label="方式1" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="份额类别">
            <el-select
              v-model="form.shareClasses"
              placeholder="请选择"
              class="input-field"
            >
              <el-option label="类别0" value="0" />
              <el-option label="类别1" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="submit-button flex-center">
        <el-button type="primary" native-type="submit" @click="submitBuy"
          >提交申购申请</el-button
        >
      </div>
    </el-form>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const form = ref({
  cardType: "",
  cardNumber: "",
  userName: "",
  userId: "",
  entrustMethod: "",
  account: "",
  productCode: "",
  purchaseNumber: "",
  paymentMethod: "",
  shareClasses: "",
});

const submitBuy = () => {
  router.push("/deal/info");
};
</script>
<style lang="scss" scoped>
.container {
  margin: 50px auto;
  width: 800px;
  padding: 2%;
  background-color: white;

  .title {
    margin-bottom: 20px;
  }

  .input-field {
    width: 350px;
  }
}
</style>
