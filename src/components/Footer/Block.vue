<template>
  <div class="block">
    <div class="block__title">
      {{ $t(content.title) }}
    </div>

    <div :class="`${changableClass} block__content`">
      <router-link
        class="block__content__item link"
        v-for="(item, i) in content.links"
        :key="`${i}_${item.label}`"
        :to="item.path"
      >
        {{ $t(item.label) }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    },
    canChange: {
      type: Boolean
    }
  },
  computed: {
    changableClass() {
      return this.canChange ? "changed" : "";
    }
  }
};
</script>

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

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: $screen_xs) and (max-width: $screen_small) {
      &.changed {
        width: $screen_xs;
        flex-direction: row;
        align-items: center;
        color: red;
      }
    }

    &__item {
      margin-right: 10px;
      font-weight: normal;
      font-size: $text_normal;
      line-height: 1.92;
      letter-spacing: -0.3px;
    }
  }
}
.link {
  text-decoration: none;
  color: $text_sec;
}
</style>
