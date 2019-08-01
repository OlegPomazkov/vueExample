<template>
  <div class="card" @click="$emit('cardClicked')">
    <slot class="card__header" name="header" />

    <div class="card__content">
      <div
        class="card__content__item"
        v-for="(item, k) in cardConfig"
        :key="`card_content_item_${k}`"
      >
        <div v-if="item.icon !== undefined" class="card__content__item__icon">
          <simple-svg class="base_card_icon" :filepath="item.icon" />
        </div>

        <div class="card__content__item__text">
          {{ cardData[item.prop] }}
        </div>
      </div>
    </div>

    <slot class="card__footer" name="footer" />
  </div>
</template>

<script>
/*eslint-disable */
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
      default: () => {}
    },
    cardConfig: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &__item {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;      
    } 
  }
}
</style>
