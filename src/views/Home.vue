<template>
  <div class="landing">
    <landing-header
      :stickyMenuVisible="stickyMenuVis"
      :activeItem="activeSection"
      @navigationClicked="handleNavigationClicked"
    />

    <landing-content
      :activeSection="activeSection"
      :changesSource="scrollChangesSource"
      @toggleHeaderParams="handleToggleHeaderParams"
    />

    <landing-footer />
  </div>
</template>

<script>
import Header from "@/components/Landing/Header";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";

import { mapGetters } from "vuex";

import localization from "@/mocks/localization/landing.js"; // TODO: get correct data from server
import headerFooter from "@/mocks/localization/header_footer.js"; // TODO: get correct data from server

export default {
  name: "home",
  components: {
    LandingHeader: Header,
    LandingFooter: Footer,
    LandingContent: Landing
  },
  data() {
    return {
      stickyMenuVis: false,
      activeSection: false,
      scrollChangesSource: "",
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
  },
  methods: {
    handleToggleHeaderParams(ev) {
      // ev :{section: <1-4/false>, visible: <boolean>}
      this.stickyMenuVis = ev.visible;
      this.activeSection = ev.section;
      this.scrollChangesSource = "content";
    },
    handleNavigationClicked(sectionNumber) {
      this.activeSection = sectionNumber;
      this.stickyMenuVis = true;
      this.scrollChangesSource = "navigation";
    }
  }
};
</script>
