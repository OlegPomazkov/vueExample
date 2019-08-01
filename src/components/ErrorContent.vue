<template>
  <div class="error">
    <div class="error__inner">
      <img class="error__inner__image" src="@/assets/images/error.svg" />

      <div class="error__inner__title">
        {{ $t("sorry_but_nothing") }}
      </div>

      <div class="error__inner__text">
        <div class="error__inner__text__part">
          {{ $t("try_on_") }}
        </div>

        <router-link class="error__inner__text__link" to="/">
          {{ $t("_main_page_") }}
        </router-link>

        <div class="error__inner__text__part">
          {{ $t("_or_search") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.error {
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
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: $text_postnormal;
      line-height: 1.5;
      letter-spacing: -0.4px;
      color: #304762;
      opacity: 0.6;

      &__link {
        margin-left: 5px;
        margin-right: 5px;
        text-decoration: none;
        color: $border_blue;
        cursor: pointer;
      }
    }
  }
}
</style>
