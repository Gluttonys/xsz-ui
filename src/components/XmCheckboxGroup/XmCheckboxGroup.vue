<template>
  <div class="XmCheckboxGroup" :class="[size]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XmCheckboxGroup',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    min: Number,
    max: Number,
    size: String,
  },
  provide() {
    return {
      CheckGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmCheckboxGroup";
</style>