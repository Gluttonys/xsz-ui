<template>
  <div class="xm-container" :class="{border}">

    <div class="container__title"
         v-text="title"
         v-if="title">
    </div>

    <div class="line" v-if="line"></div>

    <div class="real"
         :class="[center, XCenter, YCenter]"
         :style="{
            gridTemplateColumns: `repeat(${col}, 1fr)`,
            gridColumnGap: `${colGap}px`,
            gridRowGap: `${rowGap}px`,
            gridGap: `${gap}px`
          }"
         >
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'XmContainer',
  props: {
    col: {
      type: Number,
      default: 2
    },
    colGap: {
      type: Number,
      default: 10
    },
    rowGap: {
      type: Number,
      default: 10
    },
    gap: {
      type: Number,
      default: 10
    },
    center: {
      type: Boolean,
      default: false
    },
    XCenter: {
      type: Boolean,
      default: false
    },
    YCenter: {
      type: Boolean,
      default: false
    },
    title: String,
    line: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmContainer";
</style>