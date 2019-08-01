<template>
  <div class="table_row" @click="$emit('rowClicked')">
    <template v-for="(cell, j) in tableConfig">
      <div
        v-if="cell.type === 'image'"
        class="table_row__cell image"
        :key="`${j}_${cell.label}`"
        :style="cell.style"
      >
        {{ `image_${rowData[cell.prop]}` }}
      </div>

      <div
        v-if="cell.type === 'base'"
        class="table_row__cell base"
        :key="`${j}_${cell.label}`"
        :style="cell.style"
      >
        {{ rowData[cell.prop] }}
      </div>

      <slot
        v-if="cell.type === 'template'"
        :name="cell.prop"
        class="table_row__cell template"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true,
      default: () => []
    },
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

.table_row {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &__cell {
    height: 100%;
    overflow: hidden;
  }
}
</style>
