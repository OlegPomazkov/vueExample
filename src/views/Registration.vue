<template>
  <div class="registration">
    <registration-header />
    <router-view />
    <registration-footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { mapGetters } from "vuex";

import localization from "@/mocks/localization/registration.js"; // TODO: get correct data from server
import headerFooter from "@/mocks/localization/header_footer.js"; // TODO: get correct data from server

export default {
  components: {
    RegistrationHeader: Header,
    RegistrationFooter: Footer
  },
  data() {
    return {
      locData: localization,
      locDataHeaderFooter: headerFooter
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
    const localesHeaderFooter = this.locDataHeaderFooter; // TODO: get correct data from server

    Object.keys(localesData).forEach(lang => {
      this.$i18n.mergeLocaleMessage(lang, localesData[lang]);
      this.$i18n.mergeLocaleMessage(lang, localesHeaderFooter[lang]);
    });
    this.$i18n.locale = this.currLang;
  }
};
</script>
