<template>
  <div class="start">
    <div class="start__inner">
      <img class="start__inner__image" src="@/assets/images/start.svg" />

      <div class="start__inner__title">
        {{ $t("let_begin") }}
      </div>
      <div class="start__inner__text">
        {{ $t("long_start_text") }}
      </div>

      <el-button
        class="start__inner__button"
        type="primary"
        size="small"
        @click="handleClickStart"
      >
        {{ $t("company_registration") }}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickStart() {
      this.$router.push({ name: "steps" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.start {
  width: 100%;
  height: 100%;
  min-height: 731px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $back_main;

  &__inner {
    height: 100%;
    min-height: 731px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &__image {
      margin-top: 52px;

      @media (max-width: $screen_xxs) {
        width: 95%;
      }
    }

    &__title {
      margin-top: 54px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: $title_large;
      line-height: 1.48;
      color: $text_prim;
    }

    &__text {
      margin-top: 10px;
      width: 100%;
      max-width: 415px;
      text-align: center;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: $text_postnormal;
      line-height: 1.5;
      letter-spacing: -0.4px;
      color: #304762;
      opacity: 0.6;
    }

    &__button {
      width: 200px;
      margin-top: 33px;
    }
  }
}
</style>
