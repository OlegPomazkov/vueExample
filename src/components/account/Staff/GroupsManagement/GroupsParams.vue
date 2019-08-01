<template>
  <div class="params">
    <div class="params__header">
      <div class="params__header__back" @click="handleBackClick">
        <simple-svg
          class="params__header__back__icon"
          :filepath="back"
          :width="'10px'"
          :height="'11px'"
          :id="'back'"
        />
      </div>

      <div class="params__header__title">
        <div class="params__header__title__up">
          {{ `${groupId === "new" ? $t("new_group") : $t(editedGroup.name)}` }}
        </div>
        <div class="params__header__title__down">
          {{
            `${groupId === "new" ? $t("create_user_group") : $t("edit_group")}`
          }}
        </div>
      </div>

      <div class="params__header__control" @click="handleCloseClick">
        <simple-svg
          class="icon_close"
          :filepath="close"
          :width="'18px'"
          :height="'18px'"
          :id="'close'"
        />
      </div>
    </div>

    <div v-if="!deleteInProcess" class="params__body">
      <div class="params__body__inner">
        <div class="params__body__inner__name">
          <div class="params__body__inner__name__title">
            {{ $t("group_name") }}
          </div>
          <input
            class="params__body__inner__name__input"
            v-model="editedGroup.name"
          />
        </div>

        <div class="params__body__inner__items_title">
          {{ $t("access_rules") }}
        </div>

        <div
          v-for="(param, k) in paramsList"
          class="params__body__inner__item"
          :key="`param_${k}`"
        >
          <el-switch
            class="params__body__inner__item__status"
            v-model="param.status"
          ></el-switch>

          <div class="params__body__inner__item__name">
            {{ param.name }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="!deleteInProcess" class="params__footer">
      <div class="params__footer__control left" @click="handleDeleteGroup">
        {{ $t("delete") }}
      </div>

      <div class="params__footer__control right" @click="handleSaveGroup">
        {{ $t("save") }}
      </div>
    </div>

    <!--  -------------------- Delete dialog  ------------------------ -->
    <div v-if="deleteInProcess" class="params__body">
      <div class="delete">
        <div class="params__body delete__question">
          {{ $t("are_you_sure_to_delete") }}
        </div>

        <div class="params__body delete__image">
          <img
            v-if="groupEmployees > 0"
            class="params__body delete__image__back left"
            :src="`${publicPath}images/account/staff_avatars/avatar_1.jpg`"
          />
          <div class="params__body delete__image__wrapper_center">
            <simple-svg
              :filepath="basket"
              :width="'16px'"
              :height="'18px'"
              :id="'basket'"
            />
          </div>
          <img
            v-if="groupEmployees > 0"
            class="params__body delete__image__back right"
            :src="`${publicPath}images/account/staff_avatars/avatar_2.jpg`"
          />
        </div>

        <div class="params__body delete__name">
          {{ editedGroup.name }}
        </div>
        <div class="params__body delete__employees">
          {{ `${$t("employees")} ${groupEmployees}` }}
        </div>

        <div class="params__body delete__controls">
          <div
            class="params__body delete__controls__control up"
            @click="handleCancelDelete"
          >
            {{ $t("cancel") }}
          </div>
          <div
            class="params__body delete__controls__control down"
            @click="handleConfirmDelete"
          >
            {{ $t("confirm_delete") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import BaseInput from '@/components/BaseComponents/BaseInput'

import { mapGetters } from "vuex";

export default {
  components: {
    BaseInput
  },
	props: {
    groupId: {
      type: String,
      required: true
    },
    groupEmployees: {
      type: Number,
      required: true
    }
	},
	data() {
    return {
      publicPath: process.env.BASE_URL,
		  paramsList: [],
      deleteInProcess: false,
      back: require("@/assets/images/icons/back.svg"),
      close: require("@/assets/images/icons/close.svg"),
      basket: require("@/assets/images/icons/basket.svg")
    }
	},
  computed: {
    ...mapGetters({
      groups: "agencies/allGroups"
    }),
    editedGroup() {
      if( this.groupId !== 'new') {
        return JSON.parse(JSON.stringify(this.groups[this.groupId]))
      } else {
        return {
          id: 'new',  // TODO: Set new id on save
          name: 'Новая группа',   // TODO: Do something with name
          features: this.paramsList 
        }
      }
    }
	},
  mounted() {
    if (this.groupId === 'new') {
      const key = Object.keys(this.groups)[0]
      
      this.groups[key].features.forEach( item => {
        this.paramsList.push({
          name:item.name,
          status: false 
        })
      })
    } else {
      this.paramsList = this.editedGroup.features
    }
  },
	methods: {
    handleCloseClick() {
      this.$emit('hideModal')
    },
    handleBackClick() {
      this.$emit('changeMode')
    },
    handleDeleteGroup() {
      this.deleteInProcess = true
    },
    handleCancelDelete() {
      this.deleteInProcess = false
    },
    handleConfirmDelete() {
      this.$store.dispatch('agencies/deleteGroup', this.editedGroup.id)
      this.deleteInProcess = false
      this.$emit('hideModal')
    }, 
    handleSaveGroup(){
      this.$store.dispatch('agencies/saveGroupChanges', this.editedGroup)
      this.handleBackClick()
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/styles/_variables.scss";

.params .simple-svg {
  &#back,
  &#close {
    fill: $text_prim;

    &:hover {
      cursor: pointer;
      fill: $text_sec;
    }
  }

  &#basket {
    fill: $white;
  }
}

.params__body.delete__image__wrapper_center {
  flex: unset !important;
  width: 60px !important;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: $border_blue !important;
  z-index: 1001;
}

.params__body.delete__image__back {
  flex: unset !important;
  width: 48px !important;
  height: 48px;
  border-radius: 50%;
  opacity: 0.5;

  &.left {
    margin-right: -18px;
  }
  &.right {
    margin-left: -18px;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.params {
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

  	&__back {
      width: 60px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $back_odd_row;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
  	}

  	&__title {
      margin-left: 20px;
  		flex: 1;
	  	display: flex;
	  	flex-direction: column;
	  	justify-content: flex-start;
	  	align-items: flex-start;

	  	&__up {
	  		font-weight: bold;
	  		font-size: $title_small;
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
    background-color: $back_main;

    & .delete {
      box-sizing: border-box;
      padding-top: 20px;
      padding-left: 24px;
      padding-right: 24px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      
      &__question {
        font-weight: normal;
        font-size: $text_normal;
        color: $text_prim;
        text-align: center;
      }

      &__image {
        box-sizing: border-box;
        width: 100%;
        padding-top: 24px;
        padding-bottom: 13px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center
      }

      &__name {
        font-weight: bold;
        font-size: $title_small;
        color: $text_prim;
        text-align: center;        
      }

      &__employees {
        font-weight: normal;
        font-size: $text_prenormal;
        color: $text_sec;
        text-align: center;        
      }

      &__controls {
        box-sizing: border-box;
        width: 100%;
        padding-top: 25px;

        &__control {
          width: 100%;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          font-weight: 600;
          font-size: $text_normal;
          box-shadow: 0px 2px 0px $shadow_small_button;

          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }

          &.up {
            box-sizing: border-box;
            color: $text_prim;
            background-color: $white;
            border: 1px solid $border_prim;
          }

           &.down {
            color: $white;
            background-color: $border_blue;
          }
        }
      }
    }

  	&__inner {
      box-sizing: border-box;
  		width: 100%;
  		min-height: 100%;
      padding-top: 25px;
      padding-left: 25px;
      padding-right: 25px;
  		background-color: $white;

      &__name {
        box-sizing: border-box;
        padding-top: 20px;
        padding-bottom: 20px;
        font-weight: normal;
        font-size: $text_postnormal;

        &__title {
          letter-spacing: -0.3px;
          color: $text_sec;
          margin-bottom: 6px;
        }

        &__input {
          width: 100%;
          height: 35px;
          color: $text_prim;
          padding-left: 10px; 
          border: 1px solid $border_prim;
        }
      }

      &__items_title {
        box-sizing: border-box;
        font-weight: normal;
        font-size: $text_postnormal;
        letter-spacing: -0.3px;
        color: $text_sec;
        margin-bottom: 6px;
      }      

      &__item {
        box-sizing: border-box;
        width: 100%;
        padding-bottom: 16px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        &__name {
          margin-left: 8px;
          font-weight: normal;
          font-size: $text_postnormal;
          letter-spacing: -0.3px;
          color: $text_prim;
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
    box-shadow: 0px 15px 25px $shadow_main;

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
