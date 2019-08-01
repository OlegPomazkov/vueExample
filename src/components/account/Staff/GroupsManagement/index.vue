<template>
  <div class="groups_management">
    <groups-employee
      v-if="mode === 'employee'"
      @hideModal="handleHideModal"
      @editGroupParams="handleEditGroupParams"
    />
    <groups-params
      v-if="mode === 'params'"
      :groupId="groupToEditId"
      :groupEmployees="groupStaff"
      @hideModal="handleHideModal"
      @changeMode="handleChangeMode"
    />
  </div>
</template>

<script>
import GroupsEmployee from "./GroupsEmployee";
import GroupsParams from "./GroupsParams";

export default {
  components: {
    GroupsEmployee,
    GroupsParams
  },
  data() {
    return {
      mode: "employee",
      groupToEditId: "",
      groupStaff: null
    };
  },
  methods: {
    handleHideModal() {
      this.$emit("hideModal");
    },
    handleEditGroupParams(obj) {
      // obj: {id:<groupId|string>, staff:<number of employees|number>}
      this.groupToEditId = obj.id;
      this.groupStaff = obj.staff;
      this.mode = "params";
    },
    handleChangeMode() {
      this.mode = "employee";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.groups_management {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 328px;
  height: 100%;
}
</style>
