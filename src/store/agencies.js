import STAFF from "@/mocks/staff_data"; // TODO: Get data from backend
import STAFF_STATUS from "@/mocks/staff_status"; // TODO: Get data from backend
import STAFF_GROUPS from "@/mocks/staff_groups"; // TODO: Get data from backend

export default {
  namespaced: true,
  state: {
    staff: [],
    groups: {}
  },
  getters: {
    allStaff: state => state.staff.map(i => i),
    allGroups: state => Object.assign({}, state.groups)
  },
  mutations: {
    SET_STAFF(state, staff) {
      state.staff = staff.map(i => i);
    },
    SET_STAFF_STATUS(state, statusObj) {
      state.staff.forEach(item => {
        if (statusObj[item.id]) {
          item.status = statusObj[item.id];
        } else {
          item.status = 0;
        }
      });
    },
    SET_STAFF_GROUPS(state, groups) {
      const obj = {};

      groups.forEach(group => {
        obj[group.id] = group;
      });
      state.groups = obj;
    },
    UPDATE_EMPLOYEE_GROUP(state, data) {
      const personInd = state.staff.findIndex(i => i.id === data.personId);

      state.staff[personInd].position = data.newGroup.toString();
    },
    UPDATE_GROUP_PARAMS(state, group) {
      state.groups[group.id] = group;
    },
    DELETE_GROUP(state, groupId) {
      delete state.groups[groupId];
    }
  },
  actions: {
    // TODO: Get data from backend
    getStaff({ commit }) {
      commit("SET_STAFF", STAFF.staff);
    },
    // TODO: Get data from backend
    getStaffStatus({ commit }) {
      commit("SET_STAFF_STATUS", STAFF_STATUS);
    },
    // TODO: Get data from backend
    getStaffGroups({ commit }) {
      commit("SET_STAFF_GROUPS", STAFF_GROUPS);
    },
    // TODO: Set data to backend too when ready
    updateEmployeeGroup({ commit }, data) {
      // data:{personId:<string>, newGroup:<string>}
      commit("UPDATE_EMPLOYEE_GROUP", data);
    },
    // TODO: Set data to backend too when ready
    saveGroupChanges({ commit }, group) {
      commit("UPDATE_GROUP_PARAMS", group);
    },
    // TODO: Set data to backend too when ready
    deleteGroup({ commit }, groupId) {
      commit("DELETE_GROUP", groupId);
    }
  }
};
