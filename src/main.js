import { createApp } from "vue";
import { createPinia } from "pinia";
// import "./styles/common.scss";
import "normalize.css/normalize.css";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import CmTable from "@/components/CmTable.vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.component(CmTable.name, CmTable);
app.use(createPinia());
app.use(router);
app.mount("#app");
