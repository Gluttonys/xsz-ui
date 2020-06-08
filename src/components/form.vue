<template>
  <div class="xsz-form">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "XszForm",
    props: {
      model: {
        type: Object,
        required: true
      },
    },
    // 把当前Form传递给子组件
    provide() {
      return {
        Form: this
      }
    }
  }
</script>

<style scoped>


</style>