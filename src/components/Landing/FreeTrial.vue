<template>
  <div class="trial_link" @click="handleClick">
    <!--     <img class="trial_link__icon" src="@/assets/images/play_blue.svg" />
-->
    <simple-svg
      class="trial_link__icon"
      :filepath="play"
      :width="'16px'"
      :height="'16px'"
      :id="'play'"
    />

    <span class="trial_link__text">
      {{ $t("trial_link") }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      play: require("@/assets/images/icons/play.svg")
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ name: "error" });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.trial_link .simple-svg {
  margin-top: 3px;

  &#play {
    fill: $border_blue;

    &:hover {
      cursor: pointer;
      fill: $text_sec;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.trial_link {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &__icon {
    margin-right: 6px;
  }

  &__text {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: $text_normal;
    color: $border_blue;
  }
}
</style>
