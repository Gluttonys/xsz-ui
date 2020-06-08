<template>
  <div class="check-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "XszCheckboxGroup",
    props: {
      value: {
        type: Array,
        default: []
      }
    },
    provide() {
      return {
        CheckGroup: this
      }
    }

  }
</script>

<style scoped>

</style>