<template>
  <div class="table">
    <staff-table-header class="table__header" :tableConfig="tableConfig" />

    <staff-table-row
      :class="
        `table__data ${k % 2 ? 'even' : 'odd'} ${
          k === activeRow ? 'active' : ''
        }`
      "
      v-for="(row, k) in tableData"
      :tableConfig="tableConfig"
      :key="`data_row_${k}`"
      :rowData="row"
      @rowClicked="handleRowClicked(k)"
    >
      <base-badge
        class="table__data__cell avatar"
        slot="avatar"
        :avatar="row.avatar"
        :name="row.name"
        :surname="row.surname"
        :position="row.position"
        :style="slotStyle('avatar')"
      />

      <div
        slot="status"
        class="table__data__cell status"
        :style="slotStyle('status')"
      >
        <div
          :class="
            `status__image ${
              row.status
                ? row.status > 0
                  ? 'connect'
                  : 'blocked'
                : 'not_connect'
            }`
          "
        ></div>

        <div class="status__content">
          {{
            row.status
              ? row.status > 0
                ? $t("connect")
                : $t("blocked")
              : $t("not_connect")
          }}
        </div>
      </div>

      <div
        slot="controls"
        class="table__data__cell controls"
        :style="slotStyle('controls')"
      >
        <div class="controls__button">
          <simple-svg
            :filepath="letter"
            :width="'15px'"
            :height="'11px'"
            :id="'letter'"
          />
        </div>
        <div class="controls__button">
          <simple-svg
            :filepath="threePoints"
            :width="'12px'"
            :height="'4px'"
            :id="'three_points'"
          />
        </div>
      </div>
    </staff-table-row>
  </div>
</template>

<script>
/*eslint-disable */
import StaffTableHeader from "@/components/BaseComponents/BaseTableHeader";
import StaffTableRow from "@/components/BaseComponents/BaseTableRow";
import BaseBadge from "@/components/BaseComponents/BaseBadge";

export default {
  components: {
    StaffTableHeader,
    StaffTableRow,
    BaseBadge
  },
  props: {
    tableData: {
      type: Array,
      required: true,
      default: () => []
    },
    tableConfig: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      activeRow: -1,
      threePoints: require("@/assets/images/icons/three_points.svg"),
      letter: require("@/assets/images/icons/letter.svg"),
    }
  },
  methods: {
    slotStyle(name) {
      const ind = this.tableConfig.findIndex(i => i.prop === name);

      return this.tableConfig[ind].style
    },
    handleRowClicked(num) {
      this.activeRow = num
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.simple-svg {
  &#three_points,
  &#letter {
    fill: $text_prim;
 }
}
.table__data__cell.controls .simple-svg {
  &#three_points,
  &#letter {
    fill: $text_prim !important;
  } 
}

.table .table_row__cell.base {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: normal;
  font-size: $text_postnormal;
  letter-spacing: -0.3px;
  color: $text_prim;
}

.table .table_header {
  height: 56px;

  &__cell {  
    box-sizing: border-box;
    padding-left: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: $text_prenormal;
    letter-spacing: -0.3px;
    color: $text_prim;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.table {
  box-sizing: border-box;
  width: 100%;
  max-width: 1100px;
  font-family: Lato;
  font-style: normal;
  border: 1px solid $border_prim;
  box-shadow: 0px 4px 6px $shadow_main;
  border-radius: 4px;

  &__header{
    width: 100%;
  }

  &__data{
    width: 100%;
    height: 56px;

    &.odd {
      background-color: $back_odd_row;
    }
    &.even {
      background-color: $white;
    }
    &.active {
      background-color: $white;
      box-shadow: 0px 0px 14px $shadow_active_row;
      border-radius: 2px;
    }
  }
}

.status {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &__image {
    width: 10px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &.connect {
      background-color: $status_ok;
    }
    &.not_connect {
      background-color: $status_not;
    }
    &.blocked {
      background-color: $status_warn;
    }
  }

  &__content {
    margin-left: 10px;
    font-weight: normal;
    font-size: $text_postnormal;
    letter-spacing: -0.3px;
    color: $text_prim;
  }  
}

.controls__button {
  display: none;
}

.active .controls {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

    &__button {
      box-sizing: border-box;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $back_table_button;
      border-radius: 0px 2px 2px 0px;

      &:hover {
        background-color: $back_footer;
      }
    }
}
</style>
