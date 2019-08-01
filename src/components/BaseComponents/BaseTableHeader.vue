<template>
  <div class="table_header">
    <div
      class="table_header__cell"
      v-for="(cell, i) in tableConfig"
      :key="`header_${i}_${cell.label}`"
      :style="cell.style"
    >
      {{ $t(cell.label) }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableConfig: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.table_header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  &__cell {
    height: 100%;
  }
}
</style>
