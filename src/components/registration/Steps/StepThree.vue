<template>
  <div class="steps_3">
    <div class="steps_3__title">
      {{ $t("terms_of_use") }}
    </div>

    <div class="steps_3__subtitle">
      {{ $t("reg_step_3_subtitle") }}
    </div>

    <div class="steps_3__body">
      <vue-perfect-scrollbar
        class="steps_3__body__wrapper"
        v-once
        :settings="settings"
      >
        <div
          class="steps_3__body__wrapper__content"
          v-for="(point, k) in text_ru.text"
          :key="k"
        >
          {{ point }}
        </div>
      </vue-perfect-scrollbar>

      <el-checkbox class="steps_3__body__checkbox" v-model="agreement">
        {{ $t("i_agree") }}
      </el-checkbox>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import TEXT_RU from "@/assets/texts/terms_of_use_ru.js";

export default {
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      text_ru: TEXT_RU,
      agreement: false,
      settings: {
        maxScrollbarLength: 60
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.steps_3 {
  width: 100%;
  font-family: Lato;
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__title {
    font-weight: bold;
    font-size: $title_large;
    line-height: 1.48;
    color: $text_prim;
  }

  &__subtitle {
    width: 95%;
    max-width: 462px;
    margin-top: 10px;
    margin-bottom: 37px;
    font-weight: normal;
    font-size: $text_postnormal;
    line-height: 1.5;
    letter-spacing: -0.4px;
    color: $text_prim;
    opacity: 0.6;
    text-align: center;
  }

  &__body {
    box-sizing: border-box;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 31px;
    padding-right: 31px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid $back_main;

    &__wrapper {
      width: 100%;
      height: 484px;

      &__content {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: $text_postnormal;
        line-height: 1.36;
        letter-spacing: -0.3px;
        color: $text_mid;
        margin-bottom: 7px;
      }
    }

    &__checkbox {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
