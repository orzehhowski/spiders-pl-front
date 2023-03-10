import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
const app = createApp(App);

app.config.globalProperties.$API_URL = "http://localhost:8080";
app.use(router);

app.mount("#app");
