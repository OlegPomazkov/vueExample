export default {
  namespaced: true,
  state: {
    lang: "ru"
  },
  getters: {
    lang: state => state.lang
  },
  mutations: {
    SET_LANG(state, lang) {
      state.lang = lang;
    }
  },
  actions: {
    changeLang({ commit }, lang) {
      commit("SET_LANG", lang);
    }
  }
};
