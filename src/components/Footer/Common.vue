<template>
  <div class="block">
    <div class="block__logo">
      <simple-svg
        :filepath="logoImage"
        :width="'14px'"
        :height="'12px'"
        :id="'logo_image'"
      />
      <simple-svg
        :filepath="logoText"
        :width="'73px'"
        :height="'11.5px'"
        :id="'logo_text'"
      />
    </div>
    <div class="block__address" :style="flexStyle">
      <span :style="hackStyle">
        {{ $t("rostov_address") }}
      </span>
    </div>
    <div class="block__button" @click="handlePutRequestClick">
      {{ $t("put_request") }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flexStyle: {
        display: "flex",
        "flex-direction": "row",
        "justify-content": "flex-start",
        "align-items": "center",
        "line-height": 1.8
      },
      hackStyle: {
        "text-align": "left",
        "max-width": "188px"
      },
      logoImage: require("@/assets/images/icons/logo_image.svg"),
      logoText: require("@/assets/images/icons/logo_text.svg")
    };
  },
  methods: {
    handlePutRequestClick() {
      this.$router.push({ name: "error" });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.block__logo .simple-svg {
  &#logo_image {
    fill: $text_sec;
  }
  &#logo_text {
    fill: $text_prim;
  }
}

.block {
  color: $text_sec;
  font-family: Lato;
  font-style: normal;
  align-items: flex-start;

  &__logo {
    width: 118px;
    height: 27px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    &__text {
      margin-left: 6.4px;
    }
  }

  &__address,
  &__button {
    font-weight: normal;
    font-size: $text_normal;
    line-height: 1.46;
    letter-spacing: -0.3px;
  }

  &__button {
    width: 190px;
    height: 35px;
    margin-top: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $border_sec;
    box-sizing: border-box;
    border-radius: 2px;
  }
}
</style>
