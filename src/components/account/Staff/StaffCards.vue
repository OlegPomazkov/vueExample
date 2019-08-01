<template>
  <div class="cards">
    <base-card
      class="cards__card"
      v-for="(cardData, k) in cardsData"
      :key="`${k}_card`"
      :cardData="cardData"
      :cardConfig="cardConfig"
    >
      <base-badge
        class="cards__card__header"
        slot="header"
        :avatar="cardData.avatar"
        :name="cardData.name"
        :surname="cardData.surname"
        :position="cardData.position"
        :status="cardData.status"
      />

      <div slot="footer" class="cards__card__footer controls">
        <div class="controls__button text">
          <span class="controls__button_text">
            {{ $t("write") }}
          </span>
        </div>
        <div class="controls__button">
          <simple-svg
            :filepath="threePoints"
            :width="'12px'"
            :height="'4px'"
            :id="'three_points'"
          />
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
/*eslint-disable */
import BaseCard from "@/components/BaseComponents/BaseCard";
import BaseBadge from "@/components/BaseComponents/BaseBadge";

export default {
  components: {
    BaseCard,
    BaseBadge
  },
  props: {
    cardsData: {
      type: Array,
      required: true,
      default: () => []
    },
    cardConfig: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      threePoints: require("@/assets/images/icons/three_points.svg")
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.cards .simple-svg {
  &#three_points {
    fill: $text_prim;
  }
}

.base_card_icon .simple-svg {
  width: 10px;
  height: 10px;
  fill: $text_prim;
}

.controls__button:hover .simple-svg {
  &#three_points {
    fill: $border_blue;
  }
}

.card__content__item {
  margin-bottom: 12px;

  &__icon {
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $back_table_button;
  }
  &__text {
    margin-left: 10px;
    font-weight: normal;
    font-size: $text_postnormal;
    letter-spacing: -0.3px;
    color: $text_prim;
  }
}

</style>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.cards {
  box-sizing: border-box;
  width: 100%;
  max-width: 1100px;
  font-family: Lato;
  font-style: normal;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  &__card {
    box-sizing: border-box;
    width: 100%;
    max-width: 270px;
    height: auto;
    margin: 5px;
    padding: 20px;
    background: $white;
    box-shadow: 0px 2px 2px $shadow_small_button;
    border-radius: 4px;

    &:hover {
      box-shadow: 0px 0px 14px $shadow_active_row;
    }

    &__header {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid $border_prim;
    }
    &__footer {
      padding-top: 14px;
    }
  }
}

.controls {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

    &__button {
      box-sizing: border-box;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $back_table_button;
      border-radius: 0px 2px 2px 0px;

      &.text {
        width: 194px;
        font-size: $text_normal;
        font-weight: 600;
        color: $text_prim;
      }

      &:hover {
        background-color: $back_footer;
        color: $border_blue;
      }
    }
}
</style>
