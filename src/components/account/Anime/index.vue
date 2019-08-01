<template>
  <div class="anime_outer">
    <div class="anime">
      <base-animation
        :name="`test`"
        :options="defaultOptions"
        :height="200"
        :width="200"
        @animCreated="handleAnimation"
      />

      <div>
        <p>Speed: x{{ animationSpeed }}</p>
        <input
          type="range"
          value="1"
          min="0"
          max="3"
          step="0.5"
          @change="onSpeedChange"
          v-model="animationSpeed"
        />
      </div>

      <button @click="stop">stop</button>
      <button @click="pause">pause</button>
      <button @click="play">play</button>
      <button @click="changeDirection">change direction</button>
    </div>
  </div>
</template>

<script>
/*eslint-disable */

  import BaseAnimation from '@/components/BaseComponents/BaseAnimation.vue';
  import animationData from '@/assets/animations/Intro.json';

  export default {
    components: {
      BaseAnimation
    },
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1,
        animationDirection: 1
      }
    },
    methods: {
      handleAnimation: function (obj) { 
        this.anim = obj.anim;
        this.anim.addEventListener('complete', () => {
          console.log('<----------------- complete ------------------------->')
        })
      },
      stop: function () {
        this.anim.stop();
      },
      play: function () {
        this.anim.play();
      },
      pause: function () {
        this.anim.pause();
      },
      changeDirection() {
        this.animationDirection = this.animationDirection === 1? -1: 1;
        this.anim.setDirection(this.animationDirection);
      },
      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

</style>
