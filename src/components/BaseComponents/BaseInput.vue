<template>
  <div class="base_input">
    <div class="base_input__label" v-if="value !== ''">
      {{ label }}
    </div>

    <input
      class="base_input__input"
      :style="value === '' ? emptyStyle : ''"
      :type="type"
      :value="value"
      :placeholder="label"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
/*eslint-disable */
export default {
  props: {
    value: {
      required: true,
      default: () => ''
    },
    type: {
      type: String,
      default: () => 'text'
    },
    label: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      emptyStyle: {
        'margin-top': '15px'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.base_input {
  box-sizing: border-box;
  width: 100%;
  height: 52px;
  padding-left: 13px;
  padding-right: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid $border_prim;
  background-color: $white;

  &:hover {
    border-color: $border_blue;
  }

  &__label {
    width: 100%;
    margin-top: 7px;
    font-weight: normal;
    font-size: $text_prenormal;
    color: $text_sec;
  }

  &__input {
    width: 100%;
    margin-top: 5px;
    border: none;
    outline: none;
    color: $text_prim;
  }
}
</style>
