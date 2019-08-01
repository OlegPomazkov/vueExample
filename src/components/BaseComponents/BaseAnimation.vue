<template>
  <div
    :style="style"
    :ref="name"
    @click="$emit('animationClicked', name)"
  ></div>
</template>

<script>
/*eslint-disable */

import lottie from "lottie-web";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
    height: Number,
    width: Number
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : "100%",
        height: this.height ? `${this.height}px` : "100%",
        overflow: "hidden"
      }
    };
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs[this.name],
      renderer: "svg",
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings
    });
    this.$emit("animCreated", {
      name: this.name,
      anim: this.anim
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
</style>
