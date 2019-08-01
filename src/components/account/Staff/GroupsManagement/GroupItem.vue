<template>
  <div class="group_item">
    <div class="group_item__wrapper">
      <div
        :class="`group_item__wrapper__caret ${caretClass}`"
        @click="handleCaretClick"
      >
        <simple-svg
          :filepath="caret"
          :width="'4px'"
          :height="'8px'"
          :id="'caret'"
        />
      </div>

      <div class="group_item__wrapper__name">
        {{ groupData.name }}
      </div>
      <div class="group_item__wrapper__amount">
        {{ `(${groupData.persons.length})` }}
      </div>

      <div class="group_item__wrapper__line"></div>

      <div class="group_item__wrapper__icon" @click="handleEditClick">
        <simple-svg
          :filepath="gear"
          :width="'16px'"
          :height="'16px'"
          :id="'gear'"
        />
      </div>
    </div>

    <div v-if="innerVisible" class="group_item__content">
      <slot name="innerContent" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    groupData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      innerVisible: false,
      caret: require("@/assets/images/icons/caret.svg"),
      gear: require("@/assets/images/icons/gear.svg")
    };
  },
  computed: {
    caretClass() {
      return this.innerVisible ? "down" : "";
    }
  },
  methods: {
    handleCaretClick() {
      this.innerVisible = !this.innerVisible;
    },
    handleEditClick() {
      this.$emit("editGroupParams");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.group_item .simple-svg {
  &#caret,
  &#gear {
    fill: $text_sec;

    &:hover {
      cursor: pointer;
      fill: $text_prim;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.group_item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: $back_main;

  &.under_drag {
    .group_item__wrapper {
      &__name,
      &__amount {
        color: $border_blue !important;
      }
    }
  }

  &__content {
    width: 100%;
  }

  &__wrapper {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &__caret {
      margin-left: 24px;
      margin-right: 11px;

      &:hover {
        cursor: pointer;
      }

      &.down {
        transform: rotate(90deg);
      }
    }
    &__name {
      font-weight: bold;
      font-size: $text_normal;
      color: $text_prim;
    }
    &__amount {
      margin-left: 9px;
      margin-right: 9px;
      font-weight: bold;
      font-size: $text_normal;
      color: $text_sec;
    }
    &__line {
      flex: 1;
      height: 1px;
      background-color: $border_prim;
    }
    &__icon {
      margin-right: 24px;
      margin-left: 11px;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
}
</style>
