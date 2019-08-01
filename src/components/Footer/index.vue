<template>
  <div class="reg_footer">
    <div class="reg_footer__blocks">
      <common-comp class="reg_footer__blocks__block" />
      <contacts-comp class="reg_footer__blocks__block" />
      <block-comp class="reg_footer__blocks__block" :content="info" />
      <block-comp
        class="reg_footer__blocks__block"
        :content="help"
        :canChange="true"
      />
    </div>
    <div class="reg_footer__links">
      <router-link
        class="reg_footer__links__item"
        v-for="(item, i) in links"
        :key="`${i}_${item.label}`"
        :to="item.path"
      >
        {{ $t(item.label) }}
      </router-link>
    </div>
    <div class="reg_footer__footer">
      <div class="reg_footer__footer__wrapper">
        <div class="reg_footer__footer__wrapper__copyright">
          © 2019 «ADBERY»
        </div>
        <div class="reg_footer__footer__wrapper__lang">
          <simple-svg
            :filepath="lang"
            :width="'16px'"
            :height="'16px'"
            :id="'lang'"
          />
          <div
            class="reg_footer__footer__wrapper__lang__lang"
            @click="handleLangClick"
          >
            {{ currLang !== "ru" ? "Russian" : "English" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonComp from "./Common";
import ContactsComp from "./Contacts";
import BlockComp from "./Block";
import { mapGetters } from "vuex";

export default {
  components: {
    CommonComp,
    ContactsComp,
    BlockComp
  },
  data() {
    return {
      lang: require("@/assets/images/icons/lang.svg"),
      info: {
        title: "information",
        links: [
          { label: "privacy_policy", path: "/error" },
          { label: "legal_documents_and_regulations", path: "/error" },
          { label: "terms_of_service", path: "/error" },
          { label: "reviews", path: "/error" }
        ]
      },
      help: {
        title: "help_and_support",
        links: [
          { label: "faq", path: "/error" },
          { label: "payment_information", path: "/error" },
          { label: "protection_of_personal_data", path: "/error" },
          { label: "mobile_applications", path: "/error" }
        ]
      },
      links: [
        { label: "service_center", path: "/error" },
        { label: "help", path: "/error" },
        { label: "advertising_on_website", path: "/error" },
        { label: "promotion", path: "/error" },
        { label: "premium_accommodation", path: "/error" },
        { label: "special_offers", path: "/error" },
        { label: "jobs", path: "/error" },
        { label: "documents", path: "/error" },
        { label: "Приложения", path: "/error" }
      ]
    };
  },
  computed: {
    ...mapGetters({
      currLang: "app/lang"
    })
  },
  methods: {
    handleLangClick() {
      this.$store.dispatch(
        "app/changeLang",
        this.currLang === "ru" ? "en" : "ru"
      );
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.reg_footer .simple-svg {
  &#lang {
    fill: $white;
  }
}

.reg_footer__footer__wrapper__lang:hover .simple-svg {
  &#lang {
    fill: $border_sec;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.reg_footer {
  width: 100%;
  height: 100%;
  min-height: 322px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: $back_footer;

  &__blocks {
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    margin-top: 44px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    &__block {
      width: 25%;
      min-width: 248px;
      height: 144px;
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      @media (min-width: $screen_xs) and (max-width: $screen_small) {
        min-width: 245px;
      }

      @media (min-width: $screen_xxs) and (max-width: $screen_xs) {
        min-width: 270px;
      }
    }
  }

  &__links {
    box-sizing: border-box;
    width: 100%;
    max-width: 1110px;
    height: 100%;
    min-height: 25px;
    margin-top: 26px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: $screen_xxs) {
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-start;
    }

    &__item {
      margin-right: 20px;
      margin-top: 7px;
      color: $text_sec;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: $text_normal;
      line-height: 1.92;
      letter-spacing: -0.3px;
      text-decoration: none;
    }
  }

  &__footer {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $text_sec;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: $text_normal;
    line-height: 1.42;
    color: $white;

    &__wrapper {
      width: 100%;
      max-width: 1110px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &__copyright {
        margin-left: 10px;
      }

      &__lang {
        margin-right: 10px;
        display: flex;
        align-items: center;

        &__lang {
          margin-left: 5px;
        }

        &:hover {
          cursor: pointer;
          color: $border_sec;
        }
      }
    }
  }
}
</style>
