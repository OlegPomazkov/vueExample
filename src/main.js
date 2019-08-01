import Vue from "vue";
import App from "./App.vue";
import { SimpleSVG } from "vue-simple-svg";
import router from "./router";
import store from "./store";
import initPlugins from "./plugins";

import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: process.env.VUE_APP_SENTRY_DSN,
    environment: process.env.VUE_APP_SENTRY_ENVIRONMENT,
    integrations: [new Integrations.Vue({ Vue, attachProps: true })]
  });
}

Vue.config.productionTip = false;

Vue.component("SimpleSvg", SimpleSVG);

const app = {
  router,
  store,
  render: h => h(App)
};

initPlugins(app);

new Vue(app).$mount("#app");
