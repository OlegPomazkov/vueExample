<template>
  <div class="new_account">
    <div class="new_account__header">
      <div class="new_account__header__control left" @click="handleBackClick">
        <simple-svg
          :filepath="back"
          :width="'10px'"
          :height="'11px'"
          :id="'back'"
        />
      </div>

      <div class="new_account__header__text">
        {{ $t("new_account_creating") }}
      </div>

      <div class="new_account__header__control right" @click="handleCloseClick">
        <simple-svg
          :filepath="close"
          :width="'18px'"
          :height="'18px'"
          :id="'close'"
        />
      </div>
    </div>

    <div class="new_account__body">
      <base-input
        class="new_account__body__input"
        :label="$t('name')"
        v-model="name"
      />
      <base-input
        class="new_account__body__input"
        :label="$t('surname')"
        v-model="surname"
      />
      <base-input
        class="new_account__body__input"
        :label="$t('email')"
        v-model="email"
      />
      <el-select
        class="new_account__body__select"
        size="small"
        :placeholder="$t('choose_group')"
        v-model="group"
      >
        <el-option
          size="small"
          v-for="(group, k) in groupsToSee"
          :label="group.label"
          :value="group.value"
          :key="`${k}_group`"
        />
      </el-select>
    </div>

    <div class="new_account__footer">
      <div
        class="new_account__footer__control"
        @click="handleSendInvitationClick"
      >
        {{ $t("send_invitation") }}
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import BaseInput from '@/components/BaseComponents/BaseInput';

import { mapGetters } from "vuex";

export default {
	components: {
		BaseInput
	},
	data() {
		return {
			name: '',
			surname: '',
			email: '',
			group: '',
     		close: require("@/assets/images/icons/close.svg"),
      		back: require("@/assets/images/icons/back.svg")
		}
	},
  computed: {
	  ...mapGetters({
	    groups: "agencies/allGroups"
	  }),
	  groupsToSee() {
	  	const arr = []

	  	Object.keys(this.groups).forEach( key => {
	  		arr.push({
	  			value: key.toString(),
	  			label: this.groups[key].name
	  		})
	  	})

	  	return arr
	  }
	},
  methods: {
  	handleCloseClick() {
  		this.$emit('closeAddNewDialog')
  	},
  	handleBackClick() {
  		this.$emit('backToBaseDialog')
  	},
  	handleSendInvitationClick() {
  		this.$emit('sendInvitation', {
  			name: this.name,
  			surname: this.surname,
  			position: this.groups[this.group].name
  		})
  	}
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.new_account .simple-svg {
  margin-top: 3px;

  &#back,
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

.new_account {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	&__header {
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 20px;
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: $white;

		&__text {
			font-weight: bold;
			font-size: $text_normal;
			color: $text_prim;
		}

		&__control {
			cursor: pointer;
			opacity: 0.8;
		}
	}

	&__body {
		box-sizing: border-box;
		padding-top: 17px;
		padding-left: 20px;
		padding-right: 20px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: $back_main;

		&__input {
			width: 100%;
			margin-top: 10px;
		}

		&__select {
			width: 100%;
			margin-top: 10px;
			margin-bottom: 20px;
		}
	}

	&__footer {
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 20px;
		padding-bottom: 20px;
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: $white;

		&__control {
			box-sizing: border-box;
			width: 100%;
			height: 35px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 600;
			font-size: $text_normal;
			box-shadow: 0px 2px 0px $shadow_small_button;
			border-radius: 2px;
			background-color: $border-blue;
			color: $white;

			&:hover {
				cursor: pointer;
				opacity: 0.8;
			}
		}
	}
}
</style>
