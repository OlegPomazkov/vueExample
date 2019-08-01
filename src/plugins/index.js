import Vue from "vue";
import axios from "./axios";
import i18n from "./i18n";
import element from "./element-ui";

export default function(app) {
  let inject = (name, plugin) => {
    let key = `$${name}`;

    app[key] = plugin;
    app.store[key] = plugin;

    Vue.use(() => {
      if (Vue.prototype.hasOwnProperty(key)) {
        return;
      }
      Object.defineProperty(Vue.prototype, key, {
        get() {
          return this.$root.$options[key];
        }
      });
    });
  };

  axios(app, inject);
  i18n(app);
  element(app);
}
