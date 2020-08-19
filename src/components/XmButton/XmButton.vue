<template>
  <div class="XmButton"
       :class="[{plain, round, circle, disabled},type, size]"
       :style="{backgroundColor: color,color: color ? '#eee': ''}"
       @click="handleClick">
    <i v-if="icon" class="fa" :class="icon" aria-hidden="true"></i>
    <span class="content" v-if="$slots.default">
      <slot></slot>
    </span>
  </div>
</template>


<script>
export default {
  name: 'XmButton',
  props: {
    type: {
      type: String,
      default: 'default-type'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String,
    size: String,
    color: String,
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmButton.scss";
</style>
