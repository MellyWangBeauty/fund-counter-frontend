<template>
  <div class="page-container">
    <div class="left">
      <page-sidebar></page-sidebar>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import PageSidebar from "@/components/PageSidebar.vue";
const route = useRoute();
</script>
<style lang="scss">
.page-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;

  .left {
    background-color: #000;
    color: #fff;
  }
  .right {
    flex: 1;
    overflow: hidden;
    background-color: #f5f7f9;
    .main-body {
      padding: 16px 16px 30px;
      overflow: auto;
      height: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
