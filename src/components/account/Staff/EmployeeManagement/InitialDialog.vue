<template>
  <div class="initial">
    <div class="initial__header">
      <div class="initial__header__text">
        {{ $t("add_employee") }}
      </div>
      <div class="initial__header__control" @click="handleCloseClick">
        <simple-svg
          class="initial__header__control"
          :filepath="close"
          :width="'18px'"
          :height="'18px'"
          :id="'close'"
        />
      </div>
    </div>

    <div class="initial__content">
      <div class="initial__content__search">
        <simple-svg
          class="initial__content__search__prefix"
          :filepath="person"
          :width="'16px'"
          :height="'16px'"
          :id="'person'"
        />

        <input
          class="initial__content__search__input"
          type="text"
          v-model="currentInput"
          :placeholder="$t('start_typing_name')"
          @input="handleSearchInput"
        />
        <simple-svg
          class="initial__content__search__suffix"
          :filepath="search"
          :width="'14px'"
          :height="'14px'"
          :id="'search'"
        />
      </div>

      <div class="initial__content__body">
        <div
          class="initial__content__body__empty"
          v-if="foundEmployees.length === 0"
        >
          {{ $t("find_from_or_add_new") }}
        </div>

        <div
          class="initial__content__body__list"
          v-if="foundEmployees.length !== 0"
        >
          <base-badge
            :class="
              `initial__content__body__list__item ${k % 2 ? 'odd' : 'even'}`
            "
            v-for="(person, k) in foundEmployees"
            :key="person.id"
            :avatar="person.avatar"
            :name="person.name"
            :surname="person.surname"
            :position="person.position"
            @badgeClicked="addExistEmployee(person)"
          />
        </div>
      </div>
    </div>

    <div class="initial__footer">
      <div class="initial__footer__button" @click="handleCreateNewAccount">
        {{ $t("create_new_account") }}
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import BaseBadge from "@/components/BaseComponents/BaseBadge";

export default {
	components: {
		BaseBadge,
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
			currentInput: '',
			search: require("@/assets/images/icons/search.svg"),
      close: require("@/assets/images/icons/close.svg"),
      person: require("@/assets/images/icons/person.svg")

		}
	},
	methods: {
		handleCloseClick() {
			this.currentInput = ''
			this.handleSearchInput()
			this.$emit('closeDialog')
		},
		handleSearchInput() {
			this.$emit('searchInputChanged', this.currentInput)
		},
		addExistEmployee(person) {
			this.$emit('addOldEmployee', person)
		},
		handleCreateNewAccount() {
			this.$emit('createNew')
		}
	}
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.badge__content:hover, 
{ 
	& .badge__content__up,
	& .badge__content__down {
		color: $border_blue !important;
	}
}

.initial .simple-svg {
	margin-top: 3px;

  &#search {
    fill: $border_sec;
    &:hover {
			fill: $border_sec;    	
    }
  }
  &#person {
    fill: $icon_red;
    &:hover {
			fill: $icon_red;    	
    }  
  }
  &#close {
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

.initial {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: $white;
	font-family: Lato;
	font-style: normal;

  &__header {
  	box-sizing: border-box;
  	width: 100%;
  	height: 40px;
  	min-height: 40px;
	padding-left: 20px;
	padding-right: 20px;
  	display: flex;
  	flex-direction: row;
  	justify-content: space-between;
  	align-items: center;
  	font-weight: bold;
	font-size: $text_normal;
	color: $text_prim;

		&__control {
			&:hover {
				cursor: pointer;
				opacity: 0.8;
			}
		}
  }

  &__content {
  	width: 100%;
  	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

		&__search {
			box-sizing: border-box;
			width: 260px;
			height: 35px;
			display: flex;
		  	flex-direction: row;
	  		justify-content: space-between;
	  		align-items: center;
	  		border: 1px solid $border_prim;
	  		box-shadow: 0px 4px 6px $shadow_main;

		  	&__input {
		  		border: none;
		  		outline: none;
		  		flex: 1;
		  		&:hover {
		  			cursor: pointer;
		  		}
		  	}
		  	&__prefix, &__suffix {
		  		margin-left: 10px;
		  		margin-right: 10px;
		  	}
		}

		&__body {
			width: 100%;
			margin-top: 20px;
			margin-bottom: 20px;
			text-align: center;
			font-weight: normal;
			font-size: $text_xxs;
			color: $text_prim;

			&__empty {
				margin-top: 24px;
				margin-left: 20px;
				margin-right: 20px;
			}

			&__list {
				width: 100%;

				&__item {
					width: 100%;
					height: 48px;

					&.even {
						background-color: $back_main;
					}
				}
			}
		}
  }

  &__footer {
  	box-sizing: border-box;
  	width: 100%;
	height: 35px;
  	margin-bottom: 20px;
  	padding-left: 20px;
  	padding-right: 20px;

  	&__button {
	  	box-sizing: border-box;
	  	width: 100%;
	  	height: 100%;
	  	display: flex;
	  	justify-content: center;
	  	align-items: center;
	  	font-weight: 600;
		font-size: $text_normal;
	  	background-color: $border_blue;
	  	color: $back_main;
	  	box-shadow: 0px 2px 0px $shadow_small_button;
	  }
	}
}
</style>
