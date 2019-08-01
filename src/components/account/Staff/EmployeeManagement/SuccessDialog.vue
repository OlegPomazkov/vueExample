<template>
  <div class="success_dialog">
    <div class="success_dialog__header">
      <div class="success_dialogl__header__text">
        {{ $t("add_employee") }}
      </div>
      <div class="success_dialog__header__control" @click="handleCloseClick">
        <simple-svg
          :filepath="close"
          :width="'18px'"
          :height="'18px'"
          :id="'close'"
        />
      </div>
    </div>

    <div class="success_dialog__body">
      <div class="success_dialog__body__message">
        {{
          `${
            type === "old"
              ? $t("add_employee_success")
              : $t("send_invite_success")
          }`
        }}
      </div>

      <div class="success_dialog__body__images">
        <div
          v-if="person.avatar === undefined"
          class="success_dialog__body__images__item initials"
        >
          {{ initials }}
        </div>
        <img
          v-if="person.avatar !== undefined"
          class="success_dialog__body__images__item"
          :src="`${publicPath}${person.avatar}`"
        />
        <div class="success_dialog__body__images__item icon_wrapper">
          <simple-svg
            :filepath="rightIcon"
            :width="'18px'"
            :height="'14px'"
            :id="'success_icon'"
          />
        </div>
      </div>

      <div class="success_dialog__body__full_name">
        {{ `${person.name} ${person.surname}` }}
      </div>
      <div class="success_dialog__body__position">
        {{ person.position }}
      </div>

      <div
        v-if="type === 'old'"
        class="success_dialog__body__delete"
        @click="handleDeleteClick"
      >
        {{ $t("delete") }}
      </div>
      <div v-if="type === 'old'" class="success_dialog__body__delete"></div>
    </div>

    <div class="success_dialog__footer">
      <div
        class="success_dialog__footer__control left"
        @click="handleAddMoreClick"
      >
        {{ $t("add_more") }}
      </div>

      <div
        class="success_dialog__footer__control right"
        @click="handleDoneClick"
      >
        {{ $t("done") }}
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */

export default {
	props: {
		person: {
			type: [Object, null],
			required: true
		},
		type: {
			type: String,
			required: true,
			default: () => 'old'
		}
	},
	data() {
    return {
      publicPath: process.env.BASE_URL,
      close: require("@/assets/images/icons/close.svg"),
    }
  },
  computed: {
  	initials() {
  		return (this.person.name[0] + this.person.surname[0]).toUpperCase()
  	},
  	rightIcon() {
  		if( this.type === 'old') return require("@/assets/images/icons/ok.svg")
  		if( this.type === 'new') return require("@/assets/images/icons/letter.svg")
  	}
  },
  methods: {
  	handleCloseClick() {
  		this.$emit('closeDialogs')
  	},
  	handleDeleteClick() {
  		this.$emit('deleteSelection')
  	},
  	handleAddMoreClick() {
  		this.$emit('addMore')
  	},
  	handleDoneClick() {
  		this.$emit('done')
  	}
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.success_dialog .simple-svg {
  &#close {
    fill: $text_prim;

    &:hover {
      cursor: pointer;
      fill: $text_sec;
    }
  }

  &#success_icon {
    fill: $white;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.success_dialog {
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

	&__body {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: $back_main;

		&__message {
			margin-top: 27px;
			margin-bottom: 10px;
			font-weight: normal;
			font-size: $text_prenormal;
			color: $text_prim;
		}

		&__images {
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			&__item {
				box-sizing: border-box;
				width: 60px;
				height: 60px;
				border-radius: 50%;
				margin-right: -9px;
				z-index: 11;

				&.initials {
					display: flex;
					justify-content: center;
					align-items: center;
					font-weight: bold;
					font-size: $title_small;
					background-color: $back_avatar;
					color: $text_light_green;
					border: 1px solid $text_light_green;
				}

				&.icon_wrapper {
					margin-left: -9px;
					margin-right: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $border_blue;
					z-index: 10;
				}
			}

		}

		&__full_name {
			margin-top: 12px; 
			margin-bottom: 2px;
			font-weight: bold;
			font-size: $title_small;
			color: $text_prim;
		}

		&__position {
			font-weight: normal;
			font-size: $text_prenormal;
			color: $text_sec;
		}

		&__delete {
			width: 128px;
			height: 19px;
			margin-top: 20px;
			margin-bottom: 24px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 600;
			font-size: $text_normal;
			color: $border_blue;

			&:hover {
				cursor: pointer;
				opacity: 0.8;
			}
		}
	}

	&__footer {
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: $white;

		&__control {
			box-sizing: border-box;
			width: 125px;
			height: 35px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 600;
			font-size: $text_normal;
			box-shadow: 0px 2px 0px $shadow_small_button;
			border-radius: 2px;

			&:hover {
				cursor: pointer;
				opacity: 0.8;
			}

			&.left {
				margin-right: 6.5px;
				color: $text_prim;
				border: 1px solid $border_prim;
			}

			&.right {
				margin-left: 6.5px;
				color: $white;
				background-color: $border_blue;
			}
		}
	}
}
</style>
