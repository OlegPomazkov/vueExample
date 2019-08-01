<template>
  <div class="landing_content">
    <div class="landing_content__cover" id="cover">
      <div class="landing_content__cover__title">
        {{ $t("landing_title") }}
      </div>
      <div class="landing_content__cover__subtitle">
        {{ $t("landing_subtitle") }}
      </div>
      <div class="landing_content__cover__controls">
        <div class="landing_content__cover__controls__button white">
          {{ $t("quick_start") }}
        </div>
        <div class="landing_content__cover__controls__button blue">
          <simple-svg
            class="landing_content__cover__controls__button__icon"
            :filepath="play"
            :width="'15px'"
            :height="'15px'"
            :id="'play'"
          />
          {{ $t("watch") }}
        </div>
      </div>
      <div class="landing_content__cover__image">
        <img
          class="landing_content__cover__image__image"
          src="@/assets/images/landing/cover_maps.png"
        />
      </div>
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <div class="landing_content__clients">
      <div class="landing_content__clients__text">
        {{ $t("early_customers") }}
      </div>
      <div class="landing_content__clients__logos">
        <img
          class="landing_content__clients__logos__image"
          v-for="(image, k) in customerLogos"
          :src="image.photo"
          :style="image.style"
          :key="`logo_${k}`"
        />
      </div>
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <div class="landing_content__section_1 nav_section" id="first">
      <div class="landing_content__section_1__title">
        {{ $t("section_1_title") }}
      </div>

      <div class="landing_content__section_1__subtitle">
        {{ $t("section_1_subtitle") }}
      </div>

      <free-trial class="landing_content__section_1__trial_link" />

      <div class="landing_content__section_1__image">
        <img
          class="landing_content__section_1__image__image"
          src="@/assets/images/landing/section_1_image.png"
        />
      </div>

      <div class="landing_content__section_1__roles">
        <div
          class="landing_content__section_1__roles__block"
          v-for="(block, k) in blockDescriptions"
          :key="`block_${k}`"
        >
          <div class="landing_content__section_1__roles__block__name">
            {{ $t(block.name) }}
          </div>
          <div class="landing_content__section_1__roles__block__title">
            {{ $t(block.title) }}
          </div>
          <div class="landing_content__section_1__roles__block__subtitle">
            {{ $t(block.subtitle) }}
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <div class="landing_content__section_2 nav_section" id="second">
      <div class="landing_content__section_2__text">
        <div class="landing_content__section_2__text__label">
          {{ $t("currently_for_verified") }}
        </div>
        <div class="landing_content__section_2__text__title">
          {{ $t("company_employees_and_customers") }}
        </div>
        <div class="landing_content__section_2__text__text">
          {{ $t("section_2_text") }}
        </div>
        <free-trial class="landing_content__section_2__text__link" />
      </div>
      <div class="landing_content__section_2__image">
        <img
          class="landing_content__section_2__image__image"
          src="@/assets/images/landing/section_2_image.png"
        />
      </div>
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <div class="landing_content__section_3 nav_section" id="third">
      <div class="landing_content__section_3__text">
        <div class="landing_content__section_3__text__title">
          {{ $t("company_employees_and_customers") }}
        </div>
        <div class="landing_content__section_3__text__text">
          {{ $t("section_2_text") }}
        </div>
        <free-trial class="landing_content__section_3__text__link" />
      </div>
      <div class="landing_content__section_3__image">
        <img
          class="landing_content__section_3__image__image"
          src="@/assets/images/landing/section_3_image.png"
        />
      </div>
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <div class="landing_content__section_4 nav_section" id="fourth">
      <div class="landing_content__section_4__text">
        <div class="landing_content__section_4__text__labels">
          <div class="landing_content__section_4__text__labels__label one">
            {{ $t("for_adverisers") }}
          </div>
          <div class="landing_content__section_4__text__labels__label two">
            {{ $t("for_ad_agencies") }}
          </div>
        </div>

        <div class="landing_content__section_4__text__title">
          {{ $t("company_employees_and_customers") }}
        </div>

        <div class="landing_content__section_4__text__text">
          {{ $t("section_2_text") }}
        </div>

        <free-trial class="landing_content__section_4__text__link" />
      </div>

      <div class="landing_content__section_4__image">
        <img
          class="landing_content__section_4__image__image"
          src="@/assets/images/landing/section_4_image.png"
        />
      </div>
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <div class="landing_content__responses">
      <response-comp
        class="landing_content__responses__item"
        v-for="(response, k) in responseDescriptions"
        :options="response"
        :key="`${k}_response`"
      />
    </div>
    <!-- ------------------------------------------------------------------------ -->
    <div class="landing_content__services">
      <div class="landing_content__services__center__large">
        <outer-services
          class="landing_content__services__center__large__content"
        />
      </div>

      <div class="landing_content__services__center__small">
        <outer-services
          class="landing_content__services__center__small__content"
        />
      </div>
    </div>
    <!-- ------------------------------------------------------------------------ -->
  </div>
</template>

<script>
import FreeTrial from "./FreeTrial";
import ResponseComp from "./Response";
import OuterServices from "./OuterServices";

export default {
  components: {
    FreeTrial,
    ResponseComp,
    OuterServices
  },
  props: {
    activeSection: {
      type: [Boolean, Number],
      required: true,
      default: () => false
    },
    changesSource: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      play: require("@/assets/images/icons/play.svg"),
      sectionIds: ["first", "second", "third", "fourth"], // TODO: Remove to config
      stickyHeaderVis: false,
      scrollOnClick: false,
      currTimeStamp: Date.now(),

      blockDescriptions: [
        {
          name: "block_name_1",
          title: "block_title_1",
          subtitle: "block_subtitle_1"
        },
        {
          name: "block_name_2",
          title: "block_title_2",
          subtitle: "block_subtitle_2"
        },
        {
          name: "block_name_3",
          title: "block_title_3",
          subtitle: "block_subtitle_3"
        }
      ],
      customerLogos: [
        {
          photo: require("@/assets/images/landing/customer_1.png"),
          style: { width: "8.2%" }
        },
        {
          photo: require("@/assets/images/landing/customer_2.png"),
          style: { width: "11.4%" }
        },
        {
          photo: require("@/assets/images/landing/customer_3.png"),
          style: { width: "15.4%" }
        },
        {
          photo: require("@/assets/images/landing/customer_4.png"),
          style: { width: "27.9%" }
        },
        {
          photo: require("@/assets/images/landing/customer_5.png"),
          style: { width: "11.6%" }
        }
      ],
      responseDescriptions: [
        {
          name: "resp_name_1",
          company: "resp_comp_1",
          photo: require("@/assets/images/landing/resp_photo_1.png"),
          text: "resp_text_1"
        },
        {
          name: "resp_name_2",
          company: "resp_comp_2",
          photo: require("@/assets/images/landing/resp_photo_2.png"),
          text: "resp_text_2"
        },
        {
          name: "resp_name_3",
          company: "resp_comp_3",
          photo: require("@/assets/images/landing/resp_photo_3.png"),
          text: "resp_text_3"
        }
      ]
    };
  },
  watch: {
    activeSection: function(newVal) {
      if (typeof newVal !== "number" || this.changesSource === "content")
        return;

      const elemToScroll = document.getElementById(this.sectionIds[newVal]);

      this.scrollOnClick = true;
      elemToScroll.scrollIntoView();
    }
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scrollOnClick) {
        this.scrollOnClick = false;

        return;
      }
      if (Date.now() - this.currTimeStamp < 50) return;

      this.currTimeStamp = Date.now();
      let coverHeight = document.getElementById("cover").offsetHeight;
      let stickyHeaderVis;

      if (window.scrollY > coverHeight) {
        stickyHeaderVis = true;
      } else {
        stickyHeaderVis = false;
      }

      let centerX = document.documentElement.clientWidth / 2;
      let centerY = document.documentElement.clientHeight / 2;
      let elem = document.elementFromPoint(centerX, centerY);
      let navSection = elem.closest(".nav_section");

      if (navSection) {
        navSection = navSection.closest(".nav_section").id;
        let scrolledNum = this.sectionIds.findIndex(i => i === navSection);

        if (
          stickyHeaderVis === this.stickyHeaderVis &&
          scrolledNum === this.activeSection
        )
          return;
        this.stickyHeaderVis = stickyHeaderVis;
        this.$emit("toggleHeaderParams", {
          section: scrolledNum,
          visible: stickyHeaderVis
        });
      } else {
        this.stickyHeaderVis = stickyHeaderVis;
        this.$emit("toggleHeaderParams", {
          section: false,
          visible: stickyHeaderVis
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/_variables.scss";

.landing_content__cover__controls__button .simple-svg {
  &#play {
    margin-top: 3px;
    fill: $white;

    &:hover {
      cursor: pointer;
      fill: $back_main;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.wrapper_2 {
  box-sizing: border-box;
  width: 100%;
  max-width: 1330px;
  padding-left: 10px;
  padding-right: 10px;
}

.landing_content {
  width: 100%;
  height: 100%;

  &__cover {
    box-sizing: border-box;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /*
    background: radial-gradient(
        678.5px at 50% 100%,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      $border_blue;
*/
    background-image: url("~@/assets/images/landing/cover_back_large.png");
    background-position: center;
    background-size: cover;

    @media (max-width: $screen_xxs) {
      align-items: flex-start;
    }

    &__title {
      box-sizing: border-box;
      width: 100%;
      max-width: 725px;
      margin-top: 120px;
      margin-bottom: 44px;
      color: $white;
      font-family: Lato;
      font-style: normal;
      font-weight: 900;
      font-size: $title_xl;
      line-height: 1.28;
      text-align: center;

      @media (max-width: $screen_xxs) {
        text-align: left;
      }
    }

    &__subtitle {
      box-sizing: border-box;
      width: 100%;
      max-width: 527px;
      margin-bottom: 26px;
      color: $white;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: $title_small;
      line-height: 1.25;
      text-align: center;

      @media (max-width: $screen_xxs) {
        text-align: left;
      }
    }

    &__controls {
      padding-bottom: 67px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      @media (max-width: $screen_xxs) {
        width: 100%;
        flex-direction: column;
      }

      &__button {
        box-sizing: border-box;
        width: 150px;
        height: 35px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 63px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: $text_normal;
        line-height: 1.46;

        @media (max-width: $screen_xxs) {
          width: 100%;
          margin-left: 0;
          margin-right: 0;
          margin-bottom: 10px;
        }

        &__icon {
          margin-right: 6.5px;
        }

        &.white {
          background-color: $white;
          color: $text_prim;
          border: 1px solid $border_prim;
          box-shadow: 0px 2px 0px $shadow_small_button;
        }
        &.blue {
          background-color: rgba(0, 0, 0, 0);
          color: $white;
          border: 1px solid $white;
        }
      }
    }

    &__image {
      box-sizing: border-box;
      width: 100%;
      margin-bottom: -4px;

      &__image {
        width: 100%;
      }
    }
  }

  &__clients {
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 28px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: $back_main;

    &__text {
      margin-top: 54px;
      margin-bottom: 28px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: $text_postnormal;
      line-height: 1.5;
      letter-spacing: -0.4px;
      color: $border_sec;
    }

    &__logos {
      box-sizing: border-box;
      width: 100%;
      max-width: 843px;
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &__image {
        opacity: 0.5;
      }
    }
  }

  &__section_1 {
    box-sizing: border-box;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 36px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: $back_main;

    &__title {
      margin-bottom: 27px;
      text-align: center;
      font-family: Lato;
      font-style: normal;
      font-weight: 900;
      font-size: $title_xl;
      color: $text_prim;
    }

    &__subtitle {
      box-sizing: border-box;
      width: 100%;
      max-width: 600px;
      margin-bottom: 21px;
      padding-left: 10px;
      padding-right: 10px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: $title_small;
      line-height: 1.25;
      text-align: center;
      color: $text_prim;
    }

    &__trial_link {
      margin-bottom: 56px;
    }

    &__image {
      box-sizing: border-box;
      width: 100%;
      max-width: 920px;
      margin-bottom: 40px;

      &__image {
        width: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }
    }

    &__roles {
      box-sizing: border-box;
      width: 100%;
      max-width: $screen_large;
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;

      @media (max-width: $screen_xs) {
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
      }

      &__block {
        box-sizing: border-box;
        width: 30%;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 30px;
        padding-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        @media (max-width: $screen_xs) {
          width: 100%;
          max-width: 450px;
          padding-left: 20px;
          padding-right: 20px;
          justify-content: center;
        }

        &__name {
          text-align: center;
          font-family: Lato;
          font-style: normal;
          font-weight: normal;
          font-size: $text_postnormal;
          line-height: 1.5;
          letter-spacing: -0.4px;
          text-transform: uppercase;
          color: $border_sec;
          margin-bottom: 16px;
        }

        &__title {
          text-align: center;
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: $title_large;
          line-height: 1.48;
          color: $text_prim;
          margin-bottom: 9px;
        }

        &__subtitle {
          text-align: center;
          font-family: Lato;
          font-style: normal;
          font-weight: normal;
          font-size: $title_small;
          line-height: 1.29;
          color: $text_prim;
        }
      }
    }
  }

  &__section_2 {
    width: 100%;
    box-sizing: border-box;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 61px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    background-color: $white;

    &__text {
      box-sizing: border-box;
      width: 50%;
      max-width: 555px;
      min-width: 336px;
      padding-top: 40px;
      padding-right: 30px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      &__label {
        width: 223px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $back_landing_label;
        border-radius: 2px;
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: $text_prenormal;
        line-height: 1.25;
        text-transform: uppercase;
        color: $text_blue;
      }

      &__title {
        max-width: 333px;
        margin-top: 21px;
        margin-bottom: 28px;
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: $title_xl;
        line-height: 1.28;
        color: $text_prim;
      }

      &__text {
        max-width: 445px;
        margin-bottom: 23px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: $title_small;
        line-height: 1.25;
        color: $text_prim;
      }
    }

    &__image {
      box-sizing: border-box;
      width: 50%;
      max-width: 555px;
      min-width: 336px;
      padding-top: 40px;
      flex: 1;

      &__image {
        width: 100%;
      }
    }
  }

  &__section_3 {
    width: 100%;
    box-sizing: border-box;
    padding-top: 30px;
    padding-bottom: 45px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: $back_main;

    &__text {
      box-sizing: border-box;
      width: 50%;
      max-width: 555px;
      min-width: 336px;
      padding-right: 30px;
      padding-top: 30px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      &__title {
        max-width: 333px;
        margin-bottom: 28px;
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: $title_xl;
        line-height: 1.28;
        color: $text_prim;
      }

      &__text {
        max-width: 445px;
        margin-bottom: 23px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: $title_small;
        line-height: 1.25;
        color: $text_prim;
      }
    }

    &__image {
      box-sizing: border-box;
      width: 50%;
      max-width: 555px;
      min-width: 336px;
      padding-right: 40px;
      padding-top: 30px;
      flex: 1;

      &__image {
        width: 100%;
      }
    }
  }

  &__section_4 {
    box-sizing: border-box;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 37px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: $white;

    &__text {
      box-sizing: border-box;
      width: 50%;
      max-width: 555px;
      min-width: 336px;
      padding-top: 40px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      &__labels {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        &__label {
          width: 133px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2px;
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: $text_prenormal;
          line-height: 1.25;
          text-transform: uppercase;
          color: $text_blue;
          border: 1px solid $back_landing_label;

          &.one {
            background: $back_landing_label;
          }
          &.two {
            background: $white;
          }
        }
      }

      &__title {
        max-width: 333px;
        margin-top: 21px;
        margin-bottom: 28px;
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: $title_xl;
        line-height: 1.28;
        color: $text_prim;
      }

      &__text {
        max-width: 445px;
        margin-bottom: 23px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: $title_small;
        line-height: 1.25;
        color: $text_prim;
      }
    }

    &__image {
      box-sizing: border-box;
      width: 50%;
      max-width: 555px;
      min-width: 336px;
      padding-left: 40px;
      padding-top: 40px;
      flex: 1;

      &__image {
        width: 100%;
      }
    }
  }

  &__responses {
    box-sizing: border-box;
    width: 100%;
    max-width: $screen_large;
    margin-top: 37px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 65px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: $screen_small) {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    &__item {
      box-sizing: border-box;
      width: 30%;
      max-width: 302px;
      margin-left: 5px;
      margin-right: 5px;

      @media (max-width: $screen_small) {
        width: 100%;
        max-width: 440px;
        margin-bottom: 10px;
      }
    }
  }

  &__services {
    width: 100%;
    max-width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("~@/assets/images/landing/section_servises_background.png");
    background-position: center;
    background-size: 100%;

    &__center__large {
      width: 800px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("~@/assets/images/landing/section_servises_center.png");
      background-position: center;
      background-repeat: no-repeat;

      @media (max-width: $screen_small) {
        display: none;
      }

      &__content {
        transform: rotate(6deg) translate(140px, -40px);
      }
    }

    &__center__small {
      width: 540px;
      height: 254px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("~@/assets/images/landing/section_servises_center_medium.png");
      background-position: center;
      background-repeat: no-repeat;

      @media (min-width: $screen_small) {
        display: none;
      }
      @media (max-width: $screen_xxs) {
        box-sizing: border-box;
        width: 100%;
        height: 279px;
        margin-left: 20px;
        margin-right: 20px;
      }

      &__content {
        transform: translate(0px, -35px);

        @media (max-width: $screen_xxs) {
          transform: translate(0px, -70px);
        }
      }
    }
  }
}
</style>
