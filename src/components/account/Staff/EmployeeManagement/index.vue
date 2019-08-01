<template>
  <div class="employee_management" :style="boxStyle">
    <initial-dialog
      v-if="initalDialogVisibility"
      :foundEmployees="foundEmployees"
      class="employee_management__modal"
      @closeDialog="handleCloseDialog"
      @searchInputChanged="handleSearchInput"
      @addOldEmployee="addExistEmployee"
      @createNew="handleCreateNewAccount"
    />

    <success-dialog
      v-if="successDialogVisibility"
      :person="personToAdd"
      :type="successType"
      class="employee_management__modal"
      @deleteSelection="handleDeleteSelection"
      @addMore="handleAddMore"
      @done="handleDone"
      @closeDialogs="handleCloseDialog"
    />

    <new-account-dialog
      v-if="addNewAccountDialogVisibility"
      class="employee_management__modal"
      @closeAddNewDialog="handleCloseAddNewDialog"
      @backToBaseDialog="handleBackToBaseDialog"
      @sendInvitation="handleSendInvitation"
    />
  </div>
</template>

<script>
/*eslint-disable */
import InitialDialog from "./InitialDialog";
import SuccessDialog from "./SuccessDialog";
import NewAccountDialog from "./NewAccountDialog";

export default {
	components: {
		InitialDialog,
		SuccessDialog,
		NewAccountDialog
	},
	props: {
		foundEmployees: {
			type: Array,
			required: true,
			default: () => []
		}
	},
	data() {
		return {
			boxStyle: {height: '240px'},
			personToAdd: null,
			successType: '',
			initalDialogVisibility: true,
			successDialogVisibility: false,
			addNewAccountDialogVisibility: false
		}
	},
	methods: {
		handleCloseDialog() {
			this.personToAdd = null
			this.successDialogVisibility = false
			this.initalDialogVisibility = false
			this.boxStyle = {}
			this.$emit('hideModal')
		},
		handleSearchInput(str) {
			this.$emit('searchChanged', str)
		},
		addExistEmployee(person) {
			this.$emit('addEmployee', person)
			this.personToAdd = person
			this.successType = 'old'
			this.boxStyle = { height: '358px', overflow: 'hidden'}
			this.initalDialogVisibility = false
			this.successDialogVisibility=true
		},
		handleDeleteSelection() {
			this.personToAdd = null
			this.successDialogVisibility = false
			this.currentInput = ''
			this.initalDialogVisibility = true
			this.boxStyle = {height: "240px"}
			this.handleSearchInput()
		},
		handleAddMore() {
			this.handleDeleteSelection(); // TODO: Add more logic on backend ready
		},
		handleDone() {
			this.handleCloseDialog();  // TODO: Add more logic on backend ready 
		},
		handleCreateNewAccount() {
			this.boxStyle = { height: '400px'}
			this.initalDialogVisibility = false
			this.addNewAccountDialogVisibility = true
		},
		handleCloseAddNewDialog() {
			this.addNewAccountDialogVisibility = false
			this.handleCloseDialog();
		},
		handleBackToBaseDialog() {
			this.initalDialogVisibility = true
			this.boxStyle = {height: "240px"}
			this.addNewAccountDialogVisibility = false
		},
		handleSendInvitation(person) {
			this.personToAdd = person
			this.successType = 'new'
			this.boxStyle = { height: '319px', overflow: 'hidden'}
			this.addNewAccountDialogVisibility = false
			this.successDialogVisibility = true
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.employee_management {
  position: relative;
	box-sizing: border-box;
  width: 300px;
  margin-top: 25px;
  margin-left: 135px;

  background-color: $white;
  font-family: Lato;
	font-style: normal;
}
</style>
