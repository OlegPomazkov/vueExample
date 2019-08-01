<template>
  <div class="block">
    <div class="block__title">
      {{ $t("contacts_support") }}
    </div>
    <div class="block__item">
      <simple-svg
        :filepath="phoneKeys"
        :width="'16px'"
        :height="'16px'"
        :id="'phone_keys'"
      />
      <span class="block__item__text">
        8 (800) 926-31-31
      </span>
    </div>
    <div class="block__item">
      <simple-svg :filepath="at" :width="'16px'" :height="'16px'" :id="'at'" />
      <span class="block__item__text">
        support@adbo.ru
      </span>
    </div>
    <div class="block__item icons">
      <img src="@/assets/images/facebook.svg" />
      <img src="@/assets/images/vk.svg" />
      <img src="@/assets/images/twitter.svg" />
      <img src="@/assets/images/instagram.svg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneKeys: require("@/assets/images/icons/phone_keys.svg"),
      at: require("@/assets/images/icons/at.svg")
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.block .simple-svg {
  &#at,
  &#phone_keys {
    fill: $border_sec;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.block {
  color: $text_sec;
  font-family: Lato;
  font-style: normal;

  &__title {
    font-weight: bold;
    font-size: $title_small;
    line-height: 1.25;
    margin-bottom: 21px;
  }

  &__item {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: $text_normal;
    line-height: 1.92;
    letter-spacing: -0.3px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &__text {
      margin-left: 10px;
    }

    &.icons {
      width: 150px;
      justify-content: space-between;
    }
  }
}
</style>
