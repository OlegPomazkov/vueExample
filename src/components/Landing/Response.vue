<template>
  <div class="response">
    <div class="response__header">
      <simple-svg
        class="response__header__quote"
        :filepath="quote"
        :width="'24px'"
        :height="'16px'"
        :id="'quote'"
      />
      <simple-svg
        class="response__header__link"
        :filepath="link"
        :width="'16px'"
        :height="'16px'"
        :id="'link'"
      />
    </div>

    <div class="response__text">
      {{ $t(options.text) }}
    </div>

    <div class="response__footer">
      <div class="response__footer__image">
        <img :src="options.photo" />
      </div>

      <div class="response__footer__person">
        <div class="response__footer__person__name">
          {{ $t(options.name) }}
        </div>

        <div class="response__footer__person__company">
          {{ $t(options.company) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quote: require("@/assets/images/icons/quote.svg"),
      link: require("@/assets/images/icons/link.svg")
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.response .simple-svg {
  &#link {
    fill: $border_prim;

    &:hover {
      cursor: pointer;
      fill: $border_blue;
    }
  }

  &#quote {
    fill: $text_prim;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.response {
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid $border_prim;
  box-shadow: 0px 4px 6px $shadow_main;
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 4px 6px $shadow_main_hover;
  }

  &__header {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 37px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__text {
    max-width: 333px;
    margin-bottom: 25px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: $title_small;
    color: $text_prim;
  }

  &__footer {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-top: 1px solid $border_prim;

    &__image {
      margin-top: 24px;
      margin-right: 12px;
    }

    &__person {
      margin-top: 26px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: $text_normal;
      line-height: 1.43;

      &__name {
        color: $text_prim;
      }
      &__company {
        color: $text_sec;
      }
    }
  }
}
</style>
