<template>
  <div class="account">
    <account-sidebar class="account__sidebar" />

    <div class="account__main">
      <account-header class="account__main__header" />
      <div class="account__main__view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/account/Header";

import { mapGetters } from "vuex";

import localization from "@/mocks/localization/sidebar.js"; // TODO: get correct data from server
import accountLocale from "@/mocks/localization/account.js"; // TODO: get correct data from server

export default {
  name: "account",
  components: {
    AccountSidebar: Sidebar,
    AccountHeader: Header
  },
  data() {
    return {
      locData: localization,
      locDataAccount: accountLocale
    };
  },
  computed: {
    ...mapGetters({
      currLang: "app/lang"
    })
  },
  watch: {
    currLang: function(val) {
      this.$i18n.locale = val;
    }
  },
  async created() {
    const localesData = this.locData; // TODO: get correct data from server
    const localesAccount = this.locDataAccount; // TODO: get correct data from server

    Object.keys(localesData).forEach(lang => {
      this.$i18n.mergeLocaleMessage(lang, localesData[lang]);
      this.$i18n.mergeLocaleMessage(lang, localesAccount[lang]);
    });
    this.$i18n.locale = this.currLang;
  }
};
</script>

<style lang="scss">
html {
  height: 100vh;
}
body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.account {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  &__sidebar {
    width: 60px;
    background: $back_sidebar;
    height: 100%;
  }

  &__main {
    width: 100%;
    height: 100%;
    max-height: 100%;
    &__header {
      width: 100%;
      height: 60px;
    }
    &__view {
      width: 100%;
      height: calc(100% - 60px);
      overflow: auto;
    }
  }
}
</style>
