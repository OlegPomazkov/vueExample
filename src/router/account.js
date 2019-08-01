const account = {
  path: "/account",
  name: "account",
  component: () =>
    import(/* webpackChunkName: "AccountComp" */ "@/views/Account.vue"),
  children: [
    {
      path: "staff",
      name: "staff",
      component: () =>
        import(/* webpackChunkName: "StaffComp" */ "@/components/account/Staff")
    },
    {
      path: "animation",
      name: "animation",
      component: () =>
        import(/* webpackChunkName: "AnimeComp" */ "@/components/account/Anime")
    }
  ]
};

export default account;
