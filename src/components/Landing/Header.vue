<template>
  <!-- --------------- "Blue" header always visible for all screen sizes ------------ -->
  <div class="registration__header_wrapper">
    <div class="registration__header">
      <div class="registration__header__logo">
        <simple-svg
          :filepath="logoImage"
          :width="'14px'"
          :height="'12px'"
          :id="'logo_image_white'"
        />
        <simple-svg
          :filepath="logoText"
          :width="'73px'"
          :height="'11.5px'"
          :id="'logo_text_white'"
        />
      </div>

      <div class="vis_large">
        <div class="registration__header__links">
          <div
            :class="
              `registration__header__links__link ${
                headerItemsState[k] ? 'active' : ''
              }`
            "
            v-for="(item, k) in headerItems"
            :key="item"
            @click="handlePageSectionClick(k)"
          >
            {{ $t(`${item}_item`) }}
          </div>
        </div>

        <div class="registration__header__controls">
          <div
            class="registration__header__controls__login"
            @click="handleLoginClick"
          >
            {{ $t("login") }}
          </div>

          <div
            class="registration__header__controls__signin"
            @click="handleRegClick"
          >
            {{ $t("signin") }}
          </div>
        </div>
      </div>

      <div class="vis_small">
        <base-anim
          class="vis_small__menu"
          :name="`closeNav`"
          :options="animOptions"
          :height="23"
          :width="23"
          @animCreated="handleAnimation"
          @animationClicked="handleClickAnimation"
        />
      </div>
    </div>

    <!-- ---------------- "Blue" menu for mobile screen size ----------------------- -->
    <div v-if="mobileMenuVisible" class="registration__mobile_menu vis_small">
      <div class="mobile_menu__links">
        <div
          :class="
            `mobile_menu__links__link ${headerItemsState[k] ? 'active' : ''}`
          "
          v-for="(item, k) in headerItems"
          :key="item"
          @click="handlePageSectionClick(k)"
        >
          {{ $t(`${item}_item`) }}
        </div>
      </div>

      <div class="mobile_menu__controls">
        <div class="mobile_menu__controls__login" @click="handleLoginClick">
          {{ $t("login") }}
        </div>

        <div class="mobile_menu__controls__signin" @click="handleRegClick">
          {{ $t("signin") }}
        </div>
      </div>
    </div>

    <!-- ----------------- "White" header visible only for not mobile screen sizes --------- -->
    <div v-if="stickyMenuVisible" class="sticky_header">
      <div class="registration__header__logo">
        <simple-svg
          :filepath="logoImage"
          :width="'14px'"
          :height="'12px'"
          :id="'logo_image'"
        />
        <simple-svg
          :filepath="logoText"
          :width="'73px'"
          :height="'11.5px'"
          :id="'logo_text'"
        />
      </div>

      <div class="sticky_header__links">
        <div
          :class="
            `sticky_header__links__link ${headerItemsState[k] ? 'active' : ''}`
          "
          v-for="(item, k) in headerItems"
          :key="item"
          @click="handlePageSectionClick(k)"
        >
          {{ $t(`${item}_item`) }}
        </div>
      </div>

      <div class="sticky_header__controls">
        <div class="sticky_header__controls__login" @click="handleLoginClick">
          {{ $t("login") }}
        </div>

        <div class="sticky_header__controls__signin" @click="handleRegClick">
          {{ $t("signin") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */

import BaseAnimation from "@/components/BaseComponents/BaseAnimation.vue";
import closeNavAnime from "@/assets/animations/Intro.json";

export default {
  components: {
    BaseAnim: BaseAnimation
  },
  props: {
    stickyMenuVisible: {
      type: Boolean,
      required: true
    },
    activeItem: {
      type: [Boolean, Number],
      required: true,
      default: () => null
    }
  },
  data() {
    return {
      headerItems: ["first", "second", "third", "fourth"],
      mobileMenuVisible: false,

      // --------------- Icons ------------------------------------------
      logoImage: require("@/assets/images/icons/logo_image.svg"),
      logoText: require("@/assets/images/icons/logo_text.svg"),

      // --------------- Animation parameters  --------------------------
      anim: {},
      animOptions: { 
        animationData: closeNavAnime,
        loop: false 
      },
      animSpeed: 0.5,
      animDirection: 1
    };
  },
  computed: {
    headerItemsState() {
      const arr = [false, false, false, false];

      if (typeof this.activeItem === "number") {
        arr[this.activeItem] = true;
      }

      return arr;
    }
  },
  methods: {
    handlePageSectionClick(k) {
      this.$emit("navigationClicked", k);
    },
    handleLoginClick() {
      this.$router.push({ name: "login" });
    },
    handleRegClick() {
      this.$router.push({ name: "person" });
    },
    toggleMobileMenu() {
      this.mobileMenuVisible = !this.mobileMenuVisible;
    },

    handleAnimation(obj) {
      this.anim = obj.anim;
      this.anim.addEventListener("complete", this.toggleMobileMenu); // TODO: Remove on beforeDestroy
    },
    handleClickAnimation() {
      this.animDirection = this.animDirection === 1? -1: 1;
      this.anim.setDirection(this.animDirection);
      this.anim.play();
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.registration__header__logo .simple-svg {
  &#logo_image_white,
  &#logo_text_white {
    fill: $white;
  }

  &#logo_image {
    fill: $border_blue;
  }

  &#logo_text {
    fill: $text_prim;
    margin-left: 4px;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.registration__header_wrapper {
  width: 100%;
}

.vis_large {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: $screen_xs) {
    display: none;
  }
}

.vis_small__menu {
  margin-right: 20px;
}
.vis_small {
  display: none;
  @media (max-width: $screen_xs) {
    display: flex;

    &.registration__mobile_menu {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background: $border_blue;

      .mobile_menu__links {
        box-sizing: border-box;
        padding-top: 56px;
        padding-bottom: 184px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        &__link {
          box-sizing: border-box;
          padding-left: 20px;
          padding-right: 20px;
          text-decoration: none;
          font-family: Lato;
          font-style: normal;
          font-weight: 600;
          font-size: $title_xl;
          color: $white;
          opacity: 0.5;

          &.active {
            opacity: 1;
          }
        }
      }

      .mobile_menu__controls {
        box-sizing: border-box;
        width: 100%;
        max-width: 400px;
        padding-left: 20px;
        padding-right: 20px;
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: $text_normal;

        &__signin {
          box-sizing: border-box;
          width: 100%;
          height: 35px;
          align-self: center;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid $border_prim;
          box-shadow: 0px 2px 0px $shadow_small_button;
          border-radius: 2px;
          background: $white;
          font-family: Lato;
          color: $text_prim;
        }

        &__login {
          box-sizing: border-box;
          width: 100%;
          height: 35px;
          margin-bottom: 10px;
          align-self: center;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid $white;
          box-shadow: 0px 2px 0px $shadow_small_button;
          border-radius: 2px;
          background: $border_blue;
          font-family: Lato;
          color: $white;
        }
      }
    }
  }
}

.registration__header {
  width: 100%;
  height: 59px;
  background: $border_blue;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__logo {
    margin-left: 24px;
    width: 140px;
    height: 27px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &__text {
      margin-left: 6px;
    }
  }

  &__links {
    margin-left: 28px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    &__link {
      text-decoration: none;
      margin-right: 24px;
      font-family: Lato;
      font-style: normal;
      font-weight: 600;
      font-size: $text_normal;
      color: $white;
      opacity: 0.5;

      &.active {
        opacity: 1;
      }
    }
  }

  &__controls {
    margin-right: 35px;
    width: 231px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: $text_normal;

    &__signin {
      box-sizing: border-box;
      width: 110px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $border_prim;
      box-shadow: 0px 2px 0px $shadow_small_button;
      border-radius: 2px;
      background: $white;
      font-family: Lato;
      color: $text_prim;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    &__login {
      box-sizing: border-box;
      width: 110px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $border_blue;
      border-radius: 2px;
      background: $border_blue;
      font-family: Lato;
      color: $white;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
}

.sticky_header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 59px;
  background: $white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: $screen_xs) {
    display: none;
  }

  &__links {
    height: 35px;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &__link {
      text-decoration: none;
      margin-right: 24px;
      font-family: Lato;
      font-style: normal;
      font-weight: 600;
      font-size: $text_normal;
      color: $text_prim;
      opacity: 0.5;

      &.active {
        opacity: 1;
      }
    }
  }

  &__controls {
    margin-right: 35px;
    width: 231px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: $text_normal;

    &__login {
      box-sizing: border-box;
      width: 110px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $white;
      font-family: Lato;
      color: $text_prim;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    &__signin {
      box-sizing: border-box;
      width: 110px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $border_blue;
      border-radius: 2px;
      background: $border_blue;
      font-family: Lato;
      color: $white;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
}
</style>
