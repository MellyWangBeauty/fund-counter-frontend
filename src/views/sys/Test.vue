<template>
  <div class="container">
    <el-button @click="active = 1">1</el-button>
    <el-button @click="active = 2">2</el-button>
    <el-button @click="active = 3">3</el-button>
    <el-steps :active="active" align-center class="steps">
      <el-step title="个人开户信息" />
      <el-step title="银行卡绑定" />
      <el-step title="风险测评信息" />
    </el-steps>
    <OpenAccount v-show="active == 1"></OpenAccount>
    <BankCard v-show="active == 2"></BankCard>
    <Survey v-show="active == 3"></Survey>
  </div>
</template>

<script setup>
import Survey from "../../components/Survey.vue";
import OpenAccount from "../../components/OpenAccount.vue";
import BankCard from "../../components/BankCard.vue";
const active = ref(1);
</script>

<style scoped lang="scss">
.container {
  padding: 1%;

  .steps {
    margin-bottom: 20px;
  }

  .openAccount {
    margin-top: 50px;
  }
}
</style>
