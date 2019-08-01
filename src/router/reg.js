const reg = {
  path: "/registration",
  name: "registration",
  component: () =>
    import(/* webpackChunkName: "RegistrationComp" */ "@/views/Registration.vue"),
  children: [
    {
      path: "login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "LoginComp" */ "@/components/registration/Login")
    },
    {
      path: "person",
      name: "person",
      component: () =>
        import(/* webpackChunkName: "PersonComp" */ "@/components/registration/Person.vue")
    },
    {
      path: "start",
      name: "start",
      component: () =>
        import(/* webpackChunkName: "StartComp" */ "@/components/registration/Start.vue")
    },
    {
      path: "steps",
      name: "steps",
      component: () =>
        import(/* webpackChunkName: "StepsComp" */ "@/components/registration/Steps")
    }
  ]
};

export default reg;
