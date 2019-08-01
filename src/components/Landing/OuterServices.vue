<template>
  <div class="services">
    <simple-svg
      class="services__icon"
      :filepath="renew"
      :width="'15px'"
      :height="'15px'"
      :id="'renew'"
    />

    <div class="services__title">
      {{ $t("support_popular") }}
    </div>
    <div class="services__images">
      <div class="services__images__group">
        <img class="service_icon" src="@/assets/images/facebook_w.svg" />
        <img class="service_icon" src="@/assets/images/vk_w.svg" />
        <img class="service_icon" src="@/assets/images/twitter_w.svg" />
      </div>

      <div class="services__images__group">
        <img class="service_icon" src="@/assets/images/yandex_w.svg" />
        <img class="service_icon" src="@/assets/images/lnkdin_w.svg" />
        <img class="service_icon" src="@/assets/images/google_w.svg" />
      </div>
    </div>
    <div class="services__footer">
      <span class="services__footer__text">
        {{ $t("already_have") }}
      </span>
      <span class="services__footer__link">
        {{ $t("log_in") }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renew: require("@/assets/images/icons/renew.svg")
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.services .simple-svg {
  &#renew {
    fill: $text_prim;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.services {
  box-sizing: border-box;
  width: 100%;
  max-width: 540px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid $border_prim;
  border-radius: 4px;
  background: $white;

  @media (max-width: $screen_xxs) {
    height: 100%;
  }

  &__icon {
    align-self: flex-end;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  &__title {
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 27px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: $title_large;
    color: $text_prim;
    text-align: center;
  }

  &__images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: $screen_xxs) {
      flex-direction: column;
    }

    &__group {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      @media (max-width: $screen_xxs) {
        padding-bottom: 10px;
      }

      & .service_icon {
        margin-left: 4px;
        margin-right: 4px;
        cursor: pointer;
      }
    }
  }

  &__footer {
    margin-top: 32px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: $text_postnormal;
    letter-spacing: -0.4px;

    &__text {
      color: $text_prim;
    }
    &__link {
      color: $text_blue;
      cursor: pointer;
    }
  }
}
</style>
