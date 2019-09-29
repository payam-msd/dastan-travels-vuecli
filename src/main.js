import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.css";
import VueAgile from "vue-agile";
import Lightbox from "vue-my-photos";
import "../compiled-icons";
import VueSVGIcon from "vue-svgicon";

Vue.use(VueSVGIcon, {
  tagName: "icon",
  isStroke: true,
  defaultWidth: "42px",
  defaultHeight: "42px",
  defaultStrokeWidth: "1.2"
});
Vue.component("lightbox", Lightbox);
Vue.use(VueAgile);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
