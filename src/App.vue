<script setup>
import { RouterView } from "vue-router";
import zhCn from "element-plus/es/locale/lang/zh-cn";
</script>

<template>
  <el-config-provider :locale="zhCn"><RouterView /></el-config-provider>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  overflow: hidden;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cursor {
  cursor: pointer;
}
.txt-c {
  text-align: center;
}
.w100p {
  width: 100%;
}
</style>
