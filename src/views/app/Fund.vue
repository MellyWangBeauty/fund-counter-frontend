<template>
  <div class="container">
    <div>基金产品</div>
    <br />
    <!--工具栏-->
    <div class="toolbar">
      <el-form :inline="true" :model="filters">
        <el-row class="row">
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
        <el-row class="row">
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
        </el-row>
        <el-row>
          <el-form-item>
            <el-button icon="search" type="primary" @click="handleSearch"
              >搜索</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button icon="plus" type="primary" @click="handleAdd"
              >新增</el-button
            >
          </el-form-item>
        </el-row>
      </el-form>
    </div>
    <!--表格栏-->
    <div class="table">
      <el-table
        ref="tableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="selectionChange"
        fit
        max-height="340"
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
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          min-width="150"
        >
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
  <!-- 新增/编辑 -->
  <el-dialog
    title="新增"
    width="40%"
    draggable
    v-model="dialogVisible"
    :close-on-click-modal="false"
    @close="dialogVisible = false"
  >
    <el-form ref="formRef" :model="form" label-width="100px">
      <el-form-item label="产品代码">
        <el-input v-model="form.code" class="input-field"></el-input>
      </el-form-item>
      <el-form-item label="产品名称">
        <el-input v-model="form.name" class="input-field"></el-input>
      </el-form-item>
      <el-form-item label="产品风险">
        <el-select
          v-model="form.risk_level"
          placeholder="请选择"
          class="input-field"
        >
          <el-option label="0" value="风险0" />
          <el-option label="1" value="风险1" />
        </el-select>
      </el-form-item>
      <el-form-item label="产品类型">
        <el-select v-model="form.type" placeholder="请选择" class="input-field">
          <el-option label="0" value="类型0" />
          <el-option label="1" value="类型1" />
        </el-select>
      </el-form-item>
      <el-form-item label="产品状态">
        <el-select
          v-model="form.status"
          placeholder="请选择"
          class="input-field"
        >
          <el-option label="0" value="状态0" />
          <el-option label="1" value="状态1" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="doClose">取消</el-button>
        <el-button type="primary" @click="handleSubmit">下一步</el-button>
      </div>
    </template>
  </el-dialog>
  <!-- 产品详情 -->
  <el-dialog
    v-model="detailDialogVisible"
    :before-close="handleClose"
    fullscreen
  >
    <Detail></Detail>
  </el-dialog>
</template>
<script setup>
import { getProductList } from "@/apis/app-fund";
import { onMounted } from "vue";
import { productList } from "@/mock/data";
import Detail from "../../components/DetailInfo.vue";
const dialogVisible = ref(false);
const detailDialogVisible = ref(false);
const isEdit = ref(true);
const currentPage = ref(1);
const pageSize = ref(100);
const disabled = ref(false);
const formRef = ref(null);
const columns = computed(() => [
  { prop: "code", label: "产品代码" },
  { prop: "name", label: "产品名称" },
  { prop: "type", label: "产品类型" },
  { prop: "risklevel", label: "产品风险等级" },
  { prop: "status", label: "产品状态" },
  { prop: "manager", label: "基金经理" },
  { prop: "buymin", label: "起购额度" },
]);
const tableData = productList;
const filters = ref({
  code: "",
  name: "",
  type: "",
  risk_level_min: "",
  risk_level_max: "",
  status: "",
  company: "",
  manager: "",
  buymin_min: "",
  buymin_max: "",
});
const form = ref({
  code: "",
  name: "",
  type: "",
  status: "",
  risk_level: "",
});
const selections = ref([]);

const doClose = () => {
  dialogVisible.value = false;
};

const handleSubmit = () => {
  dialogVisible.value = false;
};

const handleAdd = () => {
  dialogVisible.value = true;
};

function selectionChange(slts) {
  selections.value = slts;
}

function handleBatchDelete() {
  console.log(selections.value);
  const codeArray = selections.value.map((item) => item.code);
  console.log("批量删除：", codeArray);
}

const handleDetail = (row) => {
  detailDialogVisible.value = true;
  console.log(row);
};
const handleSearch = () => {
  console.log(filters.value);
};
</script>
<style lang="scss" scoped>
.container {
  padding: 2%;
  padding-bottom: 0;
  .toolbar {
    .row {
      margin-bottom: -10px;
    }
  }

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

.input-field {
  width: 100%;
}
</style>
