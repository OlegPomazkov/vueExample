<template>
  <div class="staff_outer">
    <div class="staff">
      <div class="staff__controls">
        <div class="staff__controls__left">
          <div
            class="staff__controls__left__button employee"
            @click="setModalMode('employee')"
          >
            <simple-svg
              :filepath="plus"
              :width="'14px'"
              :height="'12px'"
              :id="'plus'"
            />
            <span class="employee__text">{{ $t("new_employee") }}</span>
          </div>
          <div
            class="staff__controls__left__button group"
            @click="setModalMode('groups')"
          >
            {{ $t("users_groups") }}
          </div>
        </div>

        <div class="staff__controls__right">
          <div
            :class="
              `staff__controls__right__button ${
                currentView === 'table' ? 'active' : ''
              }`
            "
            @click="handleChangeView('table')"
          >
            <simple-svg
              :filepath="table"
              :width="'12px'"
              :height="'13px'"
              :id="'table'"
            />
          </div>
          <div
            :class="
              `staff__controls__right__button ${
                currentView === 'cards' ? 'active' : ''
              }`
            "
            @click="handleChangeView('cards')"
          >
            <simple-svg
              :filepath="cards"
              :width="'12px'"
              :height="'13px'"
              :id="'cards'"
            />
          </div>
          <el-select
            class="staff__controls__right__select"
            size="small"
            :placeholder="$t('sorting')"
            v-model="sortRule"
            @change="handleSortChanged"
          >
            <el-option
              size="small"
              v-for="(rule, k) in sortRules"
              :label="rule.label"
              :value="rule.value"
              :key="`${k}_rule`"
            />
          </el-select>
        </div>
      </div>

      <staff-table
        v-if="currentView === 'table'"
        :tableData="staffToSee"
        :tableConfig="tableConfig"
        :key="sortRule"
      />

      <staff-cards
        v-if="currentView === 'cards'"
        :cardsData="staffToSee"
        :cardConfig="cardConfig"
        :key="sortRule"
      />
    </div>

    <base-modal-dialog :isVisible="isModalVisible" @hideModal="handleHideModal">
      <div slot="inner_component">
        <employee-management
          v-if="modalMode === 'employee'"
          :foundEmployees="selectedStaff"
          @searchChanged="handleEmployeeManagementSearchChanged"
          @addEmployee="handleAddEmployee"
          @hideModal="handleHideModal"
        />
        <groups-management
          v-if="modalMode === 'groups'"
          @hideModal="handleHideModal"
        />
      </div>
    </base-modal-dialog>
  </div>
</template>

<script>
/*eslint-disable */

import tableConfig from "./tableConfig";
import cardConfig from "./cardConfig";

import StaffTable from "./StaffTable";
import StaffCards from "./StaffCards";
import BaseModalDialog from "@/components/BaseComponents/BaseModalDialog";
import EmployeeManagement from "./EmployeeManagement";
import GroupsManagement from "./GroupsManagement";

import { mapGetters } from "vuex";

export default {
  name: "StaffComp",
  components: {
    StaffTable,
    StaffCards,
    BaseModalDialog,
    EmployeeManagement,
    GroupsManagement
  },
  data() {
    return {
      currentView: "table",
      tableConfig: tableConfig,
      cardConfig: cardConfig,
      sortRule: "",
      modalMode:"employee",
      isModalVisible: false,
      selectedStaff: [],
      plus: require("@/assets/images/icons/plus.svg"),
      table: require("@/assets/images/icons/table.svg"),
      cards: require("@/assets/images/icons/cards.svg")
    };
  },
  computed: {
    ...mapGetters({
      staff: "agencies/allStaff",
      groups: "agencies/allGroups"
    }),
    sortRules() {
      return [
        { label: this.$t("by_surname"), value: "surname" },
        { label: this.$t("by_position"), value: "position" }
      ];
    },
    staffToSee() {
      return this.staff.map(person => {
        let newPerson = Object.assign({}, person);

        if (this.groups && this.groups[person.position]) {
          newPerson.position = this.groups[person.position].name;
        }
        
        return newPerson;
      });
    }
  },
  async created() {
    await this.$store.dispatch("agencies/getStaff");
    await this.$store.dispatch("agencies/getStaffStatus");
    await this.$store.dispatch("agencies/getStaffGroups");
  },
  methods: {
    handleChangeView(viewName) {
      this.currentView = viewName;
    },
    handleSortChanged(ev) {
      this.staffToSee = [...this.staffToSee.sort((a, b) =>
        a[ev].toLowerCase() > b[ev].toLowerCase() ? 1 : -1
      )];
      this.sortRule = ev
    },
    setModalMode(modalMode) {
      this.modalMode = modalMode;
      this.isModalVisible = true; 
    },
    handleHideModal() {
      this.isModalVisible = false;
    },
    handleEmployeeManagementSearchChanged( str ) {
      if( !str ) {
        this.selectedStaff = []

        return
      }

      this.selectedStaff = this.staffToSee.filter( person => {
        let cond = false

        if( person.name.toLowerCase().indexOf(str.toLowerCase()) !== -1 ){
          cond = true;
        }
        if( person.surname.toLowerCase().indexOf(str.toLowerCase()) !== -1 ){
          cond = true;
        }

        return cond
      })
    },
    handleAddEmployee(person) {
      console.log( 'Going to add ----> ', person.name, person.surname)
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/styles/_variables.scss";

.simple-svg {
  &#table,
  &#cards {
    fill: $text_prim;
  }

  &#plus {
    fill: $white;
  }
}
</style>


<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.staff_outer {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-height: 100%;
}
.staff {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: $back_main;

  &__controls {
    box-sizing: border-box;
    width: 100%;
    max-width: 1100px;
    padding-top: 25px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: Lato;
    font-style: normal;

    &__left {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      &__button {
        box-sizing: border-box;
        width: 180px;
        height: 35px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 0px $shadow_small_button;
        border-radius: 2px;
        font-weight: 600;
        font-size: $text_normal;

        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }

        &.employee {
          color: $white;
          background-color: $border_blue;

          & .employee__text {
            margin-left: 6px;
          }
        }

        &.group {
          color: $text_prim;
          background-color: $white;
        }
      }
    }

    &__right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      &__button {
        box-sizing: border-box;
        width: 35px;
        height: 35px;
        margin-right: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 0px $shadow_small_button;
        border-radius: 2px;

        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
        &.active {
          background-color: $white;
        }
      }

      &__select {
        margin-left: 8px;
      }
    }
  }
}
</style>
