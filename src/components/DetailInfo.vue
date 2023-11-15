<template>
  <div class="btns">
    <el-button @click="handleUnitClick">单位净值走势</el-button>
    <el-button @click="handleTotalClick">累计净值走势</el-button>
  </div>
  <div class="container">
    <div ref="linegraph" class="graph"></div>
    <div class="table">
      <el-table
        ref="tableRef"
        :data="productDetail"
        @selection-change="selectionChange"
        fit
        max-height="400"
      >
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
          v-bind="daygrowth"
          label="日增长率"
          :prop="daygrowth"
          align="center"
        >
          <template #default="{ row }">
            <span :style="{ color: getFontColor(row.daygrowth) }">{{
              row.daygrowth
            }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as echarts from "echarts";
import { productDetail } from "@/mock/data";

const columns = computed(() => [
  { prop: "date", label: "日期" },
  { prop: "networth", label: "单位净值" },
  { prop: "totalnetworth", label: "累计净值" },
]);

const handleUnitClick = () => {
  selectedGraph.value = "unitnetworth";
  init();
};

const handleTotalClick = () => {
  selectedGraph.value = "totalnetworth";
  init();
};

const linegraph = ref(); // 使用ref创建虚拟DOM引用
const selectedGraph = ref("unitnetworth");

onMounted(() => {
  init();
});

function getFontColor(value) {
  return value >= 0 ? "red" : "green";
}

function init() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(linegraph.value, null, {
    width: 500,
    height: 400,
  });
  let option = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {},
    toolbox: {
      show: false,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "time",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      min: "dataMin",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 20,
      },
      {
        start: 0,
        end: 20,
      },
    ],

    series: [
      {
        type: "line",
        smooth: true,
        symbol: "none",
        areaStyle: {},
        data: productDetail.map((dataPoint) => ({
          value:
            selectedGraph.value == "unitnetworth"
              ? [dataPoint.date, dataPoint.networth]
              : [dataPoint.date, dataPoint.totalnetworth],
        })),
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
</script>

<style scoped>
.btns {
  display: flex;
  justify-content: center;
  margin-left: -600px;
  margin-bottom: -20px;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* justify-content: space-around; */

  .graph {
    /* border: 1px solid red; */
  }

  .table {
    padding: 1%;
    /* border: 1px solid blue; */
  }
}
</style>
