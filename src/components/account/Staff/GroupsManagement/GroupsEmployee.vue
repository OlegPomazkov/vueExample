<template>
  <div class="employees">
    <div class="employees__header">
      <!--
      <img class="employees__header__icon" src="@/assets/images/group.svg" />
-->
      <simple-svg
        class="employees__header__icon"
        :filepath="group"
        :width="'34px'"
        :height="'34px'"
        :id="'group'"
      />

      <div class="employees__header__title">
        <div class="employees__header__title__up">
          {{ $t("users_groups") }}
        </div>
        <div class="employees__header__title__down">
          {{ $t("groups_management") }}
        </div>
      </div>

      <div class="employees__header__control" @click="handleCloseClick">
        <!--
        <img class="icon_close" src="@/assets/images/close_dark.svg" />
-->
        <simple-svg
          class="employees__header__control"
          :filepath="close"
          :width="'18px'"
          :height="'18px'"
          :id="'close'"
        />
      </div>
    </div>

    <div class="employees__body">
      <div class="employees__body__inner" @dragover="handleDragOver">
        <group-item
          :id="key"
          v-for="(group, key) in groupsToSee"
          :key="key"
          :groupData="group"
          @editGroupParams="handleEditGroupParams(key)"
        >
          <div slot="innerContent" class="inner_content">
            <div
              :id="person.id"
              class="inner_content__item"
              v-for="person in group.persons"
              :key="person.id"
              draggable="true"
              @dragend="handleDragEnd"
            >
              <base-badge
                class="inner_content__item__badge"
                :avatar="person.avatar"
                :name="person.name"
                :surname="person.surname"
                :position="person.position"
              />
              <!--
              <img
                class="inner_content__item__control"
                src="@/assets/images/six_circles.svg"
              />
-->
              <simple-svg
                class="inner_content__item__control"
                :filepath="sixCircles"
                :width="'9px'"
                :height="'14px'"
                :id="'six_circles'"
              />
            </div>
          </div>
        </group-item>
      </div>
    </div>

    <div class="employees__footer">
      <div
        class="employees__footer__control left"
        @click="handleEditGroupParams('new')"
      >
        {{ $t("create_group") }}
      </div>
      <div
        class="employees__footer__control right"
        @click="handleSaveCloseClick"
      >
        {{ $t("save") }}
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import BaseBadge from "@/components/BaseComponents/BaseBadge";
import GroupItem from "./GroupItem";

import { mapGetters } from "vuex";

export default {
	components: {
		GroupItem,
		BaseBadge
	},
	data() {
		return {
			groupUnderDragId: null,
      group: require("@/assets/images/icons/group.svg"),
      close: require("@/assets/images/icons/close.svg"),
      sixCircles: require("@/assets/images/icons/six_circles.svg")
		}
	},
	watch: {
		groupUnderDragId(newVal, oldVal) {
			if( newVal ) {
				document.getElementById(newVal).classList.toggle('under_drag')	
			}
			if( oldVal ) {
				document.getElementById(oldVal).classList.toggle('under_drag')	
			}
			console.log('Will toggle class to -------> ', newVal)
		}
	},
  computed: {
    ...mapGetters({
    	staff: "agencies/allStaff",
      groups: "agencies/allGroups"
    }),
	  groupsToSee() {
	  	const obj = JSON.parse(JSON.stringify(this.groups))

	  	this.staff.forEach( person => {
	  		const newPerson = Object.assign({}, person)

	  		if( obj[person.position].persons === undefined ) obj[person.position].persons = []
	  		newPerson.position = this.groups[newPerson.position].name
	  		obj[person.position].persons.push(newPerson) 
	  	})
	  
	  	return obj
	  } 
	},
	methods: {
		handleCloseClick() {
			this.$emit('hideModal');
		},
    handleSaveCloseClick() {
      // TODO: Save data to store and backend
      this.handleCloseClick();
    },
    handleEditGroupParams(groupId) {
      const staff = groupId === 'new'? 0:this.groupsToSee[groupId].persons.length;

      this.$emit('editGroupParams', {
        id: groupId,
        staff: staff
      })
    },
		handleDragEnd(ev) {
			const personId = ev.toElement.id

			if(!this.groupUnderDragId) return
			const movedPerson = this.staff.filter(item => item.id === personId)[0]

			if( movedPerson.position.toString() === this.groupUnderDragId.toString()) {
				this.groupUnderDragId = null

				return
			}
			this.$store.dispatch('agencies/updateEmployeeGroup', {
				personId: personId,
				newGroup: this.groupUnderDragId
			})
			this.groupUnderDragId = null
		},
		handleDragOver(ev) {
			ev.preventDefault()
			const stopElement = document.elementFromPoint(ev.x, ev.y);
			const groupContainer = stopElement.closest('.group_item')

			if(!groupContainer) {
				this.groupUnderDragId = null
				return
			}
			this.groupUnderDragId = groupContainer.id 
		}
	}
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.employees .simple-svg {
  &#group {
    fill: $border_sec;
  }

  &#six_circles {
    fill: $border_sec;
    &:hover {
      cursor: pointer;
      fill: $text_sec;
    }
  }
  &#close {
    margin-top: -5px;
    fill: $text_prim;
    &:hover {
      cursor: pointer;
      fill: $text_sec;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.employees {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Lato;
	font-style: normal;

  &__header {
  	box-sizing: border-box;
  	width: 100%;
  	height: 62px;
  	display: flex;
  	flex-direction: row;
  	justify-content: flex-start;
  	align-items: center;
  	background-color: $white;
  	border: 1px solid $border_prim;

  	&__icon {
  		margin-left: 25px;
  		margin-right: 12px;
  	}

  	&__title {
  		flex: 1;
	  	display: flex;
	  	flex-direction: column;
	  	justify-content: flex-start;
	  	align-items: flex-start;

	  	&__up {
	  		font-weight: bold;
	  		font-size: $text_normal;
	  		color: $text_prim;
	  	}

	  	&__down {
	  		font-weight: normal;
	  		font-size: $text_prenormal;
	  		color: $text_sec;	  		
	  	}
  	}

  	&__control {
  		align-self: flex-start;
  		margin-right: 15px;
  		margin-top: 15px;
  	}
  }

  &__body {
  	width: 100%;
  	flex: 1;
  	overflow: auto;

  	&__inner {
  		width: 100%;
  		min-height: 100%;
  		background-color: $back_main;

  		.inner_content {
  			box-sizing: border-box;
  			width: 100%;
  			padding-left: 24px;
  			padding-right: 24px;

  			&__item {
  				box-sizing: border-box;
  				width: 100%;
  				height: 48px;
  				margin-bottom: 1px;
  				display: flex;
  				flex-direction: row;
  				justify-content: space-between;
  				align-items: center;
  				background-color: $white;
  				box-shadow: 0px 2px 2px $shadow_small_button;

  				&__control {
  					margin-right: 14px;
  				}
  			}
  		}
  	}
  }

  &__footer {
  	width: 100%;
  	height: 83px;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	background-color: $white;

  	&__control {
  		box-sizing: border-box;
  		width: 100%;
  		max-width: 136px;
  		height: 35px;
  		display: flex;
  		justify-content: center;
  		align-items: center;
  		font-weight: 600;
  		font-size: $text_normal;
  		border-radius: 2px;
  		box-shadow: 0px 2px 0px $shadow_small_button;

  		&:hover {
  			cursor: pointer;
  			opacity: 0.8;
  		}

  		&.left {
  			margin-right: 4px;
  			color: $text_prim;
  			border: 1px solid $border_prim;
  		}

  		&.right {
  			margin-left: 4px;
  			color: $white;
  			background-color: $border_blue
  		}
  	}
  }


}
</style>
