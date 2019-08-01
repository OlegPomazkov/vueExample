<template>
  <div class="header">
    <div class="header__text">
      <div class="header__text__title">
        {{ $t("staff") }}
      </div>
      <div class="header__text__subtitle">
        {{ $t("accounts_and_groups_management") }}
      </div>
    </div>

    <div class="header__controls">
      <simple-svg
        class="header__controls__image"
        :filepath="search"
        :width="'18px'"
        :height="'18px'"
        :id="'search'"
      />

      <div class="header__controls__divider"></div>

      <simple-svg
        class="header__controls__image"
        :filepath="letterOpen"
        :width="'18px'"
        :height="'16px'"
        :id="'letter_open'"
      />
      <simple-svg
        class="header__controls__image"
        :filepath="bell"
        :width="'18px'"
        :height="'20px'"
        :id="'bell'"
      />

      <img
        class="header__controls__avatar"
        src="@/assets/images/account/header_avatar.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: require("@/assets/images/icons/search.svg"),
      letterOpen: require("@/assets/images/icons/letter_open.svg"),
      bell: require("@/assets/images/icons/bell.svg")
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.simple-svg {
  &#search,
  &#bell,
  &#letter_open {
    fill: $border_sec;

    &:hover {
      cursor: pointer;
      fill: $text_sec;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.header {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px $shadow_small_button;

  &__text {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: Lato;
    font-style: normal;

    &__title {
      font-weight: bold;
      font-size: $title_small;
      color: $text_prim;
    }

    &__subtitle {
      font-weight: normal;
      font-size: $text_prenormal;
      color: $text_sec;
    }
  }

  &__controls {
    width: 161px;
    margin-right: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__divider {
      width: 1px;
      height: 20px;
      background: $border_prim;
    }

    &__avatar {
      border-radius: 50%;
    }
  }
}
</style>
