<template>
  <div class="xm-image-block" @click="handleClick"
       :style="{backgroundColor: bcColor}">
    <div class="img">
      <img :src="imgPath"
           @click="handleImgClick"
           @touchstart="handleClick"
           :style="{height: `${imageHeight}px`}" alt="">
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XmImageBlock',
  props: {
    imgPath: {
      type: String,
      default: "",
      require: true
    },
    imageHeight: {
      type: Number,
      default: 90
    },
    bcColor: {
      type: String,
      default: '#ffffff'
    }

  },
  methods: {
    handleClick(event) {
      this.$emit("click", event)
    },
    handleImgClick(event) {
      this.$emit("imgClick", event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmImageBlock";
</style>