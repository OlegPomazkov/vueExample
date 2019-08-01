<template>
  <div v-if="isVisible" class="modal">
    <slot name="inner_component" />
  </div>
</template>

<script>
/*eslint-disable */
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
      default: ()=>false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.modal {
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  background-color: $back_modal;
  z-index: 1000;
}
</style>
