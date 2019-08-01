import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import ErrorPage from "@/views/ErrorPage.vue";

import registration from "./reg";
import account from "./account";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/error",
      name: "error",
      component: ErrorPage
    },
    account,
    registration
  ]
});
