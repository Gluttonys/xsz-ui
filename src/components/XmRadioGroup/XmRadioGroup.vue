<template>
  <div class="XmRadioGroup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XmRadioGroup',
  props: {
    value: null
  },
  provide() {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
@import "XmRadioGroup";
</style>