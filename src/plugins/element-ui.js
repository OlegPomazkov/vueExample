import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/fonts/lato/lato.css";

// import '@/assets/element/theme/index.css'   // Then to set custom theme

export default app => {
  Vue.use(ElementUI, {
    i18n: (key, value) => app.i18n.t(key, value)
  });
};
