<template>
  <div class="badge" @click="$emit('badgeClicked')">
    <div class="badge__image">
      <img class="badge__image__image" :src="`${publicPath}${avatar}`" />
      <div
        v-if="status !== null"
        :class="`badge__image__status ${statusStyle}`"
      ></div>
    </div>

    <div class="badge__content">
      <div class="badge__content__up">
        {{ `${name} ${surname}` }}
      </div>

      <div class="badge__content__down">
        {{ position }}
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */

export default {
  props: {
    avatar: {
      required: true
    },
    name: {
      type: String,
      required: true,
      default: () => ''
    },
    surname: {
      type: String,
      required: true,
      default: () => ''
    },
    position: {
      type: String,
      required: true,
      default: () => ''
    },
    status: {
      default: () => null
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  computed: {
    statusStyle() {
      return this.status? (this.status > 0 ? 'connect': 'blocked'): 'not_connect' 
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.badge {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &__image {
    position: relative;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;


    &__status {
      position: absolute;
      left: 35px;
      top: 20px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid $white;
      z-index: 10;

      &.connect {
        background-color: $status_ok;
      }
      &.not_connect {
        background-color: $status_not;
      }
      &.blocked {
        background-color: $status_warn;
      }
    }
  }
  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &__up {
      font-weight: bold;
      font-size: $text_postnormal;
      letter-spacing: -0.3px;
      color: $text_prim;
    }
    &__down {
      font-weight: normal;
      font-size: $text_prenormal;
      letter-spacing: -0.3px;
      color: $text_sec;
    }
  }
}

</style>
