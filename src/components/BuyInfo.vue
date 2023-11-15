<template>
  <div class="container">
    <el-row :gutter="40" class="row">
      <el-col :span="4">
        <el-form-item label="客户账号">
          <el-input v-model="filters.account"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="客户姓名">
          <el-input v-model="filters.userName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="产品代码">
          <el-input v-model="filters.productCode"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="9">
        <el-form-item label="日期区间" style="width: 100%">
          <el-row>
            <el-col :span="11">
              <el-date-picker
                v-model="filters.beginTime"
                type="date"
                label="开始日期"
                style="width: 100%"
              />
            </el-col>
            <el-col :span="2">
              <span class="flex-center">-</span>
            </el-col>
            <el-col :span="11">
              <el-date-picker
                v-model="filters.endTime"
                type="date"
                label="结束日期"
                style="width: 100%"
              />
            </el-col>
          </el-row>
        </el-form-item>
      </el-col>
      <el-col :span="2"
        ><el-button icon="search" type="primary" @click="handleSearch"
          >搜索</el-button
        ></el-col
      >
    </el-row>
    <div class="table">
      <el-table
        ref="tableRef"
        :data="tableData"
        style="width: 100%"
        height="360"
      >
        <el-table-column
          v-for="column in columns"
          v-bind="column"
          :key="column.prop"
          :label="column.label"
          :prop="column.prop"
          align="center"
          :width="column.width"
        >
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[100, 200, 300, 400]"
        background="false"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script setup>
const tableRef = ref(null);
const filters = ref({
  account: "",
  userName: "",
  productCode: "",
  beginTime: "",
  endTime: "",
});
const tableData = [
  {
    id: 0,
    userId: 0,
    entrustMethod: "DEFAULT",
    account: "string",
    cardType: "ID_CARD",
    cardNumber: "string",
    userName: "string",
    productCode: "string",
    purchaseNumber: 0,
    paymentMethod: "DEFAULT",
    shareClasses: "DEFAULT",
    createTime: "2019-08-24T14:15:22Z",
    updateTime: "2019-08-24T14:15:22Z",
  },
  { id: 0 },
  { id: 0 },
  { id: 0 },
  { id: 0 },
  { id: 0 },
];
const columns = computed(() => [
  { prop: "id", label: "交易编号", width: "80" },
  { prop: "userId", label: "用户ID", width: "100" },
  { prop: "entrustMethod", label: "委托方式", width: "100" },
  { prop: "account", label: "交易编号", width: "100" },
  { prop: "cardType", label: "银行卡", width: "100" },
  { prop: "cardNumber", label: "银行卡号", width: "100" },
  { prop: "productCode", label: "产品代码", width: "100" },
  { prop: "purchaseNumber", label: "交易金额", width: "100" },
  { prop: "paymentMethod", label: "支付方式", width: "100" },
  { prop: "shareClasses", label: "份额类别", width: "100" },
  { prop: "createTime", label: "创建时间", width: "200" },
  { prop: "updateTime", label: "更新时间", width: "200" },
]);
</script>
<style scoped lang="scss">
.container {
  background-color: #fff;
}
.row {
  display: flex;
  align-items: center;
}
.table {
  width: 100%;
  margin-top: 15px;
}

.pagination {
  margin-top: 15px;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
