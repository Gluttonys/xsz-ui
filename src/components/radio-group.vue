<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "XszRadioGroup",
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

<style scoped>

</style>