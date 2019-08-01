<template>
  <div class="registration__header">
    <div class="registration__header__logo">
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

    <slot name="title" />

    <div class="registration__header__controls">
      <el-button type="text" size="mini" @click="handleLoginClick">
        {{ $t("login") }}
      </el-button>
      <el-button type="primary" size="mini" @click="handleRegClick">
        {{ $t("signin") }}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoImage: require("@/assets/images/icons/logo_image.svg"),
      logoText: require("@/assets/images/icons/logo_text.svg")
    };
  },
  methods: {
    handleLoginClick() {
      this.$router.push({ name: "login" });
    },
    handleRegClick() {
      this.$router.push({ name: "person" });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.simple-svg {
  &#logo_image {
    fill: $border_blue;
  }

  &#logo_text {
    fill: $text_prim;
    margin-left: 4px;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.registration__header {
  width: 100%;
  height: 59px;
  background: $white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__logo {
    margin-left: 24px;
    width: 140px;
    height: 27px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &__text {
      margin-left: 6px;
    }
  }

  &__controls {
    margin-right: 35px;
    width: 231px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
