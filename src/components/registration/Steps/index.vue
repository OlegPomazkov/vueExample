<template>
  <div class="wrapper">
    <div class="steps">
      <div class="steps__header">
        <div :class="`${step_1} circle`">
          <span class="step__innner">1</span>
        </div>
        <div :class="`${line_1_2} line`"></div>
        <div :class="`${step_2} circle`">
          <span class="step__innner">2</span>
        </div>
        <div :class="`${line_2_3} line`"></div>
        <div :class="`${step_3} circle`">
          <span class="step__innner">3</span>
        </div>
      </div>

      <step-one v-if="activeStep === 1" />
      <step-two v-if="activeStep === 2" />
      <step-three v-if="activeStep === 3" />

      <div class="steps__footer">
        <el-button
          class="steps__footer__left"
          type="text"
          size="small"
          @click="handleLeftClick"
          :icon="`el-icon-${iconName}`"
        >
          {{ $t(leftText) }}
        </el-button>
        <el-button
          class="steps__footer__right"
          type="primary"
          size="small"
          @click="handleRightClick"
        >
          {{ $t(rightText) }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default {
  components: {
    StepOne,
    StepTwo,
    StepThree
  },
  data() {
    return {
      activeStep: 1,
      iconName: "close",
      leftText: "cancel_reg",
      rightText: "next_step"
    };
  },
  computed: {
    step_1() {
      return this.activeStep === 1 ? "process" : "done";
    },
    step_2() {
      return this.activeStep === 2
        ? "process"
        : this.activeStep === 1
        ? ""
        : "done";
    },
    step_3() {
      return this.activeStep === 3 ? "process" : "";
    },
    line_1_2() {
      return this.activeStep === 1 ? "" : "done";
    },
    line_2_3() {
      return this.activeStep === 3 ? "done" : "";
    }
  },
  methods: {
    handleLeftClick() {
      if (this.activeStep > 1) this.activeStep -= 1;
      if (this.activeStep === 1) {
        this.leftText = "cancel_reg";
        this.iconName = "close";
      }
    },
    handleRightClick() {
      this.leftText = "prev_step";
      this.iconName = "back";
      if (this.activeStep < 3) this.activeStep += 1;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.wrapper {
  width: 100%;
  /* height: 100%;
   min-height: 1104px;  */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $back_main;
}
.steps {
  width: 730px;
  margin-top: 66px;
  margin-bottom: 91px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: $white;
  box-shadow: 0px 4px 6px $shadow_main;

  @media (max-width: $screen_xs) {
    width: 100%;
  }

  &__header {
    width: 510px;
    height: 40px;
    margin-top: 40px;
    margin-bottom: 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: $screen_xxs) {
      width: 95%;
    }

    & .circle {
      width: 40px;
      height: 40px;
      border: 2px solid $border_sec;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $back_main;

      & .step__innner {
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: $title_small;
        color: $border_sec;
      }

      &.process {
        border-color: $border_blue;

        & .step__innner {
          color: $text_prim;
        }
      }

      &.done {
        border-color: $border_blue;
        background-color: $border_blue;

        & .step__innner {
          color: $white;
        }
      }
    }

    & .line {
      flex: 1;
      /*     width: 190px;   */
      height: 2px;
      background-color: $border_sec;

      &.done {
        background-color: $border_blue;
      }
    }
  }

  &__footer {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__left {
      margin-left: 31px;
    }

    &__right {
      margin-right: 31px;
    }
  }
}
</style>
