<template>
  <div class="sidebar">
    <div class="sidebar__up">
      <img
        class="sidebar__up__logo"
        src="@/assets/images/account/sidebar_logo.png"
      />

      <simple-svg
        class="sidebar__up__control__temp"
        :filepath="gauge"
        :width="'20px'"
        :height="'18px'"
        :id="'gauge'"
      />
      <simple-svg
        class="sidebar__up__control__temp"
        :filepath="chart"
        :width="'18px'"
        :height="'18px'"
        :id="'chart'"
      />
      <simple-svg
        class="sidebar__up__control__temp"
        :filepath="busyTime"
        :width="'20px'"
        :height="'20px'"
        :id="'busy_time'"
      />

      <router-link class="sidebar__up__control active" :to="{ name: 'staff' }">
        <simple-svg
          class="sidebar__up__control__icon active"
          :filepath="person"
          :width="'20px'"
          :height="'20px'"
          :id="'person'"
        />
      </router-link>

      <router-link class="sidebar__up__control" :to="{ name: 'animation' }">
        <simple-svg
          class="sidebar__up__control__icon"
          :filepath="diagram"
          :width="'18px'"
          :height="'18px'"
          :id="'diagram'"
        />
      </router-link>

      <simple-svg
        class="sidebar__up__control__temp"
        :filepath="bag"
        :width="'18px'"
        :height="'16px'"
        :id="'bag'"
      />
      <simple-svg
        class="sidebar__up__control__temp"
        :filepath="horDiv"
        :width="'20px'"
        :height="'1px'"
        :id="'hor_div'"
      />
      <simple-svg
        class="sidebar__up__control__temp"
        :filepath="fourCircle"
        :width="'18px'"
        :height="'18px'"
        :id="'four_circle'"
      />
    </div>

    <simple-svg
      class="sidebar__down"
      :filepath="question"
      :width="'20px'"
      :height="'20px'"
      :id="'question'"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      gauge: require("@/assets/images/icons/gauge.svg"),
      chart: require("@/assets/images/icons/chart.svg"),
      busyTime: require("@/assets/images/icons/busy_time.svg"),
      person: require("@/assets/images/icons/person.svg"),
      diagram: require("@/assets/images/icons/diagram.svg"),
      bag: require("@/assets/images/icons/bag.svg"),
      horDiv: require("@/assets/images/icons/hor_div.svg"),
      fourCircle: require("@/assets/images/icons/four_circle.svg"),
      question: require("@/assets/images/icons/question.svg")
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.simple-svg {
  &#hor_div {
    fill: $text_sec;
  }

  &#gauge,
  &#chart,
  &#busy_time,
  &#diagram,
  &#bag,
  &#person,
  &#four_circle,
  &#question {
    fill: $text_sec;

    &:hover {
      cursor: pointer;
      fill: $back_table;
    }
  }
}

.simple-svg-wrapper.active .simple-svg {
  fill: $white !important;
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.sidebar {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &__up {
    width: 100%;
    margin-top: 9px;
    display: flex !important;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    /*  TODO: Remove this class after all links to be set */
    &__control__temp {
      margin-top: 26px;
    }

    &__control {
      box-sizing: border-box;
      width: 100%;
      margin-top: 26px;
      text-align: center;

      &.active {
        border-left: 2px solid $white;
      }
    }
  }

  &__down {
    margin-bottom: 20px;
  }
}
</style>
