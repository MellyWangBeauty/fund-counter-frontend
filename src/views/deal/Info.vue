<template>
  <div class="container">
    <div class="flex-center icon">
      <el-icon size="100" color="#409EFF"><CircleCheck /></el-icon>
    </div>
    <div class="title flex-center">认购成功！</div>
    <div class="info flex-center">
      <ul>
        <li>投资人名称：</li>
        <li>交易账号：000096</li>
        <li>产品信息：</li>
        <li>购买金额：</li>
        <li>申请编号：</li>
      </ul>
    </div>
    <div class="bts flex-center">
      <el-button type="primary" @click="backPre">继续购买</el-button>
      <el-button @click="backHome">返回首页</el-button>
      <el-button>凭证打印</el-button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const backHome = () => {
  router.push("/app/fund");
};
const backPre = () => {
  router.push("/deal/buy");
};
</script>
<style lang="scss" scoped>
.container {
  margin: 50px auto;
  width: 800px;
  height: 400px;
  padding: 2%;
  background-color: white;

  .icon {
    margin-top: 10px;
  }
  .title {
    margin-top: 20px;
    margin-left: 20px;
    font-size: 25px;
    // border: 1px solid #000;
  }

  .info {
    margin: 10px 0 10px -20px;

    ul {
      list-style: none;
      font-size: 17px;
      li {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
