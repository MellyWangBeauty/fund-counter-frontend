<template>
  <div class="container">
    <div>用户中心</div>
    <br />
    <!--工具栏-->
    <div class="toolbar">
      <el-form :inline="true" :model="filters">
        <!-- <el-row>
          <el-col :span="6">
            <el-form-item label="产品代码">
              <el-input v-model="filters.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品名称">
              <el-input v-model="filters.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品类型">
              <el-select v-model="filters.type" placeholder="请选择产品类型">
                <el-option label="0" value="类型0" />
                <el-option label="1" value="类型1" />
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="6">
            <el-form-item label="产品风险等级" style="width: 100%">
              <el-row>
                <el-col :span="10">
                  <el-input v-model="filters.risk_level_min" />
                </el-col>
                <el-col :span="4">
                  <span class="text-center">-</span>
                </el-col>
                <el-col :span="10">
                  <el-input v-model="filters.risk_level_max" />
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="基金公司">
              <el-input v-model="filters.company"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="基金经理">
              <el-input v-model="filters.manager"></el-input> </el-form-item
          ></el-col>
          <el-col :span="6"
            ><el-form-item label="产品状态">
              <el-select v-model="filters.type" placeholder="请选择产品状态">
                <el-option label="0" value="状态0" />
                <el-option label="1" value="状态1" />
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="6"
            ><el-form-item label="产品起购额度" style="width: 100%">
              <el-row>
                <el-col :span="10">
                  <el-input v-model="filters.buymin_min" />
                </el-col>
                <el-col :span="4">
                  <span class="text-center">-</span>
                </el-col>
                <el-col :span="10">
                  <el-input v-model="filters.buymin_max" />
                </el-col>
              </el-row> </el-form-item
          ></el-col>
        </el-row> -->

        <el-form-item label="客户ID">
          <el-input v-model="filters.id"></el-input>
        </el-form-item>

        <el-form-item label="客户姓名">
          <el-input v-model="filters.name"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button icon="search" type="primary" @click="handleSearch"
            >搜索</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button icon="plus" type="primary" @click="handleAdd"
            >开户</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!--表格栏-->
    <div class="table">
      <el-table
        ref="tableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="selectionChange"
      >
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column
          v-for="column in columns"
          v-bind="column"
          :key="column.prop"
          :label="column.label"
          :prop="column.prop"
          align="center"
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template #default="{ row }">
            <el-button type="text" @click="handleDetail(row)">详情</el-button>
            <el-button type="text" @click="handleEdit(row)">编辑</el-button>
            <el-button type="text" class="danger" @click="handleDelete(row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--分页栏-->
    <el-button type="danger" @click="handleBatchDelete()" class="batch-delete">
      批量删除
    </el-button>
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
import { getProductList } from "@/apis/app-fund";
import { onMounted } from "vue";
import { ElConfigProvider } from "element-plus";

const currentPage = ref(1);
const pageSize = ref(100);
const disabled = ref(false);
const columns = computed(() => [
  { prop: "id", label: "客户ID" },
  { prop: "name", label: "客户姓名" },
  { prop: "type", label: "客户类型" },
  { prop: "id_type", label: "证件类型" },
  { prop: "id_card_expiry_date", label: "证件有效期" },
  { prop: "created_date", label: "开户日期" },
]);
const tableData = ref([
  {
    id: 1,
    name: "aaa",
    type: 1,
    id_type: 1,
    id_card_expiry_date: "2025-10-31",
    created_date: "2019-10-31",
  },
  {
    id: 2,
    name: "bbb",
    type: 2,
    id_type: 2,
    id_card_expiry_date: "2024-05-07",
    created_date: "2021-05-07",
  },
]);
const filters = ref({
  id: "",
  name: "",
});
const selections = ref([]);
function selectionChange(slts) {
  selections.value = slts;
}
// const selection = ref([]); // 用于跟踪选中的行
// const isAllSelected = computed(() => {
//   return selection.value.length === tableData.value.length;
// });
// const handleSelectAll = (selected) => {
//   // 根据全选状态更新选中的行数组
//   if (selected) {
//     // 全选
//     selection.value = tableData.value.slice(); // 将所有行添加到选中的行数组中
//   } else {
//     // 取消全选
//     selection.value = []; // 清空选中的行数组
//   }
// };

// onMounted(() => {
//   getProductList().then((res) => {
//     console.log(res);
//   });
// });

// const handleBatchDelete = () => {
//   const selectedRows = tableData.value.filter((row) => row.selected);
//   // 执行批量删除操作，可以向后端发送请求或根据需要进行其他操作
//   console.log("批量删除选中的行：", selectedRows);
// };

function handleBatchDelete() {
  console.log(selections.value);
  const codeArray = selections.value.map((item) => item.code);
  console.log("批量删除：", codeArray);
}

const handleDetail = (row) => {
  console.log(row);
};
const handleSearch = () => {
  console.log(filters.value);
};
const handleAdd = () => {};
</script>
<style lang="scss" scoped>
.container {
  padding: 2%;
  .text-center {
    display: flex;
    justify-content: center;
  }

  .batch-delete {
    margin-top: 2%;
  }

  .pagination {
    margin-top: 2%;
    float: right;
  }
}
</style>
